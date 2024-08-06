import prefix from "src/scripts/prefix"
import dark from "./cover.dark.styl?raw"
import light from "./cover.light.styl?raw"
import type { Theme } from "@holy-two/data-theme"

const style = { light, dark } as const

interface Doodle extends HTMLElement {
    update: (styles: string) => void
}

function _cover_init() {
    const doodle = document.querySelector("css-doodle") as Doodle
    if (doodle) doodle.innerHTML = style[window.theme]
}

// 初始化
_cover_init()
document.addEventListener("astro:after-swap", _cover_init)

// 响应主题
window.addEventListener(`${prefix}-theme`, (event: CustomEvent<Theme>) => {
    const doodle = document.querySelector("css-doodle") as Doodle
    if (doodle) doodle.update(style[event.detail])
})
