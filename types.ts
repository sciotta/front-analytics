export type FileStats = {
    name: string;
    changes: number;
}

export type AffectedCommits = {
    datetime: Date;
    author: string;
    files: Array<FileStats>;
}