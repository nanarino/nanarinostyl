import setPrefix from "@stylus/base.styl?raw";

let prefix = "";
try {
    eval(setPrefix);
} catch (error) {
    console.log(error);
}

export default prefix;
