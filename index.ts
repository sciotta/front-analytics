import simpleGit, { SimpleGit, SimpleGitOptions, ListLogSummary, DefaultLogFields, ListLogLine } from 'simple-git';
import { loadavg } from 'os';
import { AffectedCommits } from './types';
import moment = require('moment');
 
(async () => {
    
    const options: SimpleGitOptions = {
        baseDir: process.cwd(),
        binary: 'git',
        maxConcurrentProcesses: 6,
     };

     const isCommitAffected = (log: DefaultLogFields & ListLogLine): boolean => {
         return log.diff?.files.some(file => file.file.includes('.scss'))
     }
    
    try {
        const git: SimpleGit = simpleGit(options);
        const logList: ListLogSummary = await git.log({'--stat': null});

        const affectedCommits: Array<AffectedCommits> = [];
        logList.all.forEach(log => {
            if(isCommitAffected(log)){
                const affectedCommit: AffectedCommits = {
                    author: log.author_email,
                    datetime: moment(log.date).toDate(),
                    files: log.diff?.files.map(file => ({
                        name: file.file,
                        changes: file.changes,
                    }))
                }
                affectedCommits.push(affectedCommit);
            }
        });
        console.log(affectedCommits);
    } catch(err) {
        console.log('error', err);
    } 
})();
