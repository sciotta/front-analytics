import { lstatSync } from 'fs';

export class File {
  name: string;
  path: string;
  files?: File[];

  constructor(name: string, path: string, files?: File[]) {
    this.name = name;
    this.path = path;
    this.files = files;
  }

  isDirectory() {
    return lstatSync(this.path).isDirectory();
  }
}

export type Component = {
  name: string;
  path: string;
  group?: string;
}