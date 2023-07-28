export default function (dataList: Record<string, any>) {
    const attrs: Record<`data-${string}`, any> = {};
    for (const [k, v] of Object.entries(dataList)) {
        Reflect.set(attrs, `data-${k}`, v);
    }
    return attrs
}