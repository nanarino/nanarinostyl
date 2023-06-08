import fs from 'fs';
import path from "path";
import { promisify } from "util";

const stat = promisify(fs.stat);
const readDir = promisify(fs.readdir);


export const getMenu = async (currentDir: string, rootDir: string = currentDir): Promise<string[]> => {
    const urlList = [];
    if ((await stat(path.resolve(currentDir))).isFile()) {
        return [
            path.relative(rootDir, currentDir)
                .split(path.sep)
                .join(path.posix.sep)
                .replace(/\/(index\.mdx)|(index\.md)|(index\.astro)$/i, "")
                .replace(/(\.mdx)|(\.md)|(\.astro)$/i, "")
        ];
    }
    for (const filePath of (await readDir(currentDir)).map((fileName) => path.join(currentDir, fileName))) {
        urlList.push(...await getMenu(filePath, rootDir));
    }
    return urlList;
}