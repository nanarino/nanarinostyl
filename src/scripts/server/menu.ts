import fs from "fs";
import path from "path";
import { promisify } from "util";

const stat = promisify(fs.stat);
const readDir = promisify(fs.readdir);

export interface page {
    path: string;
}
export interface menu extends page {
    children: page[];
}

export const getMenu = async (
    currentDir: string,
    rootDir: string = currentDir
): Promise<(page | menu)[]> => {
    const children: (page | menu)[] = [];
    if ((await stat(path.resolve(currentDir))).isFile()) return [];
    for (const fileName of await readDir(currentDir)) {
        const filePath = path.join(currentDir, fileName);
        children.push({
            path: path
                .relative(rootDir, filePath)
                .split(path.sep)
                .join(path.posix.sep)
                .replace(/index\.(mdx|md|astro)$/i, "")
                .replace(/(\.mdx)|(\.md)|(\.astro)$/i, ""),
            ...((await stat(filePath)).isFile()
                ? null
                : {
                      children: await getMenu(filePath, rootDir),
                  }),
        });
    }
    return children;
};
