export default function (js: string) {
    return URL.createObjectURL(new Blob([js], { type: "text/javascript" }));
}