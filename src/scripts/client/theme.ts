const root = document.documentElement;
const themeTuple = ["dark", "light"];
let theme = localStorage.getItem("theme") ?? "auto";
if (theme === "auto") {
    theme =
        themeTuple[
            +!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
        ];
}
root.dataset["theme"] = `theme-${theme}`;
const checkbox = document.getElementById(
    "header-theme-switch"
) as HTMLInputElement;
checkbox.checked = theme === "dark";
checkbox.onchange = (e: Event) => {
    const theme = themeTuple[+!(e.target as HTMLInputElement).checked];
    root.dataset["theme"] = `theme-${theme}`;
    localStorage.setItem("theme", theme);
};