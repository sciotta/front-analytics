import { readdirSync } from 'fs';
import { join } from 'path';

import { File, Component } from './types';

const dsSource = join(__dirname, '../repo/design-system');

const readDirectory = (src: string): File[] => {
  const files: File[] = readdirSync(src)
  .map(name => new File(name, join(src, name)));
  
  files.forEach(file => {
    if (file.isDirectory()) {
      file.files = readDirectory(file.path);
    }
  });
  
  return files;
}

const returnComponentsFromDirectory = (directory: File, group?: string): Component[] => {
  const components: Component[] = [];
  const dirFiles: string[] = readdirSync(directory.path);
  const componentName = `${directory.name}.jsx`;
  if (dirFiles.includes(componentName)) {
    components.push({
      name: directory.name,
      path: join(directory.path, componentName),
      group: group,
    });
  }
  if (directory.files) {
    directory.files
      .filter(file => file.isDirectory())
      .forEach(dir => {
        components.push(...returnComponentsFromDirectory(dir, directory.name));
      })
  }
  return components;
}

const directories = readDirectory(dsSource)
  .filter(file => file.isDirectory());

const components: Component[] = directories.reduce((acc, current) => {
 return [ ...acc, ...returnComponentsFromDirectory(current)];
}, [])

console.log(components);