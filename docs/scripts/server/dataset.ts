export default function (dataset: Record<string, any>) {
    const attrs: Record<`data-${string}`, string | null> = {}
    for (const [k, v] of Object.entries(dataset)) {
        let unbv: string | null
        if (v === true) unbv = ""
        else if (v === false) unbv = null
        else unbv = `${v ?? ""}`
        Reflect.set(attrs, `data-${k}`, unbv)
    }
    return attrs
}
