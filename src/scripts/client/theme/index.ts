// import prefix from "src/scripts/prefix";
// 以上代码无效，无法在inline脚本里使用import。但是我将prefix赋给了window.name。

void function () {

    type Theme = "dark" | "light";

    const themeTuple: ["dark", "light"] = ["dark", "light"];
    const root = document.documentElement;


    Object.defineProperty(window, "theme", {
        get: () => {
            let theme: (Theme | "auto") = (localStorage.getItem("theme") as (Theme | '')) || "auto";
            if (theme === "auto") {
                theme =
                    themeTuple[
                        +!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
                    ];
            }
            return theme
        }
    });

    root.dataset["theme"] = window.theme;


    // 全局监听 维护变量
    window.addEventListener(`${window.name}-theme`, (event?: CustomEvent<Theme>) => {
        root.dataset["theme"] = event.detail;
        localStorage.setItem("theme", event.detail);
    });

}()

