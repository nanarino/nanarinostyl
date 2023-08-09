import setPrefix from "@stylus/variable/prefix.styl?raw";

let prefix: string = "";
try {
    eval(setPrefix);
} catch (error) {
    console.log(error);
}

export default prefix;
