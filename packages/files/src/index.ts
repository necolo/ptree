import { ptree } from '@ptree/core';
import fs from 'fs';

export const printFiles = (dirPath: string) => {
  return ptree(dirPath, {
    formatter: pathname => {
      const paths = pathname.split('/');
      return paths[Math.max(0, paths.length - 1)];
    },
    getChildren: pathname => {
      if (!fs.existsSync(pathname)) {
        return null;
      }
      const stats = fs.lstatSync(pathname);
      if (stats.isDirectory()) {
        return fs.readdirSync(pathname).map(file => `${pathname}/${file}`);
      }
      return null;
    },
  });
};

export default {
  files: printFiles,
  core: ptree,
};