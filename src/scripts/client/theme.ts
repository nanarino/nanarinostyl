import prefix from "src/scripts/prefix";

type Theme = "dark" | "light";

const root = document.documentElement;
const themeTuple: ["dark", "light"] = ["dark", "light"];


// 初始化获取
let theme: (Theme | "auto") = (localStorage.getItem("theme") as (Theme | '')) || "auto";
if (theme === "auto") {
    theme =
        themeTuple[
            +!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
        ];
}
root.dataset["theme"] = theme;
window.theme = theme;

// 全局监听 维护变量
window.addEventListener(`${prefix}-theme`, (event?: CustomEvent<Theme>) => {
    root.dataset["theme"] = event.detail;
    localStorage.setItem("theme", event.detail);
});

// 开关触发
const checkbox = document.getElementById(
    "header-theme-switch"
) as HTMLInputElement;
checkbox.checked = theme === "dark";
checkbox.onchange = (e: Event) => {
    const theme = themeTuple[+!(e.target as HTMLInputElement).checked];
    window.dispatchEvent(new CustomEvent<Theme>(`${prefix}-theme`, { detail: theme }))
};
