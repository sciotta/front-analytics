export type FileStats = {
    name: string;
    changes: number;
}

export type AffectedCommits = {
    id: string;
    datetime: Date;
    author: string;
    files: Array<FileStats>;
}
