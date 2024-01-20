import prefix from "src/scripts/prefix";
import dark from "./cover.dark.styl?raw"
import light from "./cover.light.styl?raw"

interface Doodle extends HTMLElement {
    update: (styles: string) => void
}

const doodle = document.querySelector('css-doodle') as Doodle;

const style = { light, dark } as const;

// 初始化主题
doodle.innerHTML = style[window.theme];

// 响应主题
window.addEventListener(`${prefix}-theme`, (event: CustomEvent<"dark" | "light">) => {
    doodle.update(style[event.detail]);
});
