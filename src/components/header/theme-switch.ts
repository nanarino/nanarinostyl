import prefix from "src/scripts/prefix";

type Theme = "dark" | "light";

const themeTuple = ["dark", "light"] as const;

document.addEventListener("astro:page-load", () => {
    // 开关触发
    const checkbox = document.getElementById(
        "header-theme-switch"
    ) as HTMLInputElement;

    checkbox.checked = window.theme === "dark";

    checkbox.onchange = (e: Event) => {
        const theme = themeTuple[+!(e.target as HTMLInputElement).checked];
        window.dispatchEvent(
            new CustomEvent<Theme>(`${prefix}-theme`, { detail: theme })
        );
    };
    delete checkbox.parentElement.dataset.init;
});

document.addEventListener("astro:after-swap", () => {
    const checkbox = document.getElementById(
        "header-theme-switch"
    ) as HTMLInputElement;
    checkbox.checked = window.theme === "dark";
});
