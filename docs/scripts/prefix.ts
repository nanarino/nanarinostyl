import setPrefix from "lib/mixins/prefix.styl?raw"

let prefix: string = ""
try {
    eval(setPrefix)
} catch (error) {
    console.log(error)
}

export default prefix
