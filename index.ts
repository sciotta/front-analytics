import simpleGit, { SimpleGit, SimpleGitOptions, ListLogSummary } from 'simple-git';
import { loadavg } from 'os';
 
(async () => {
    const options: SimpleGitOptions = {
        baseDir: process.cwd(),
        binary: 'git',
        maxConcurrentProcesses: 6,
     };
    
    try {
        const git: SimpleGit = simpleGit(options);
        const logList: ListLogSummary = await git.log({'--stat': null});

        logList.all.forEach(log => {
            log.diff?.files.forEach(file => {
                console.log(file.changes);
            });
        });
    } catch(err) {
        console.log('error', err);
    } 
})();
