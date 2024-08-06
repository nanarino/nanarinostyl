import prefix from "src/scripts/prefix"
import type { Theme } from "@holy-two/data-theme"

document.addEventListener("astro:after-swap", () => {
    document.documentElement.dataset["theme"] = window.theme
})

// 监听自定义事件 切换主题的开关时主动触发
window.addEventListener(`${prefix}-theme`, (event?: CustomEvent<Theme>) => {
    document.documentElement.dataset["theme"] = event.detail
    localStorage.setItem("theme", event.detail)
})
