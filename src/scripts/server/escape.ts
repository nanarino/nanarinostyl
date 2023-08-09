import prefix from "src/scripts/prefix";

function escape(code: string) {
    return code.replace(/(?<!\\)☘/g, prefix).replace(/\\☘/g, "☘");
}

export default escape;
