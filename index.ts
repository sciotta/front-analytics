import simpleGit, {
    SimpleGit,
    SimpleGitOptions,
    ListLogSummary,
    DefaultLogFields,
    ListLogLine,
    DiffResultTextFile,
    DiffResultBinaryFile
} from 'simple-git';

import { AffectedCommits } from './types';

import moment = require('moment');
const path = require('path');

(async () => {

    const options: SimpleGitOptions = {
        baseDir: path.join(__dirname, process.env.baseDir || './'),
        binary: 'git',
        maxConcurrentProcesses: 6,
     };

    const filesAffected = (
         log: DefaultLogFields & ListLogLine
    ): Array<DiffResultTextFile | DiffResultBinaryFile> => {
         return log.diff?.files.filter(file => file.file.includes('.scss'))
     }

    try {
        const git: SimpleGit = simpleGit(options);
        const logList: ListLogSummary = await git.log({'--stat': null, '--reverse': null});

        const affectedCommits: Array<AffectedCommits> = [];

        logList.all.forEach(log => {
            const affectedFiles = filesAffected(log);
            if(affectedFiles && affectedFiles.length){
                const affectedCommit: AffectedCommits = {
                    author: log.author_email,
                    datetime: moment(log.date).toDate(),
                    files: affectedFiles.map(file => {
                        const castFile = file as DiffResultTextFile;
                        return {
                            name: castFile.file,
                            changes: castFile.changes,
                        }
                    })
                }
                affectedCommits.push(affectedCommit);
            }
        });
        console.log(affectedCommits);
    } catch(err) {
        console.log('error', err);
    }
})();
