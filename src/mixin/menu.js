import fs from 'fs'
import path from "path"
import { promisify } from "util"
const stat = promisify(fs.stat)
const readDir = promisify(fs.readdir)


export const getMenu = async (currentDir, rootDir=currentDir) => {
    let result_path = []
    if ((await stat(path.resolve(currentDir))).isFile()) {
        return ['/' + path.relative(rootDir, currentDir).split(path.sep).join(path.posix.sep)]
    }
    for (let filePath of (await readDir(currentDir)).map((fileName) => path.join(currentDir, fileName))) {
        result_path.push(...await getMenu(filePath, rootDir))
    }
    return result_path
}