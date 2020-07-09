import simpleGit, { SimpleGit, GitError } from 'simple-git';
 
const options = {
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 6,
 };

try {
    const git = simpleGit(options);
    const log = await git.log();
    console.log(log);
} catch(err) {
    console.log('error', err);
}
