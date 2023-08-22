import prefix from "src/scripts/prefix";

// 监听自定义事件 切换主题的开关时主动触发
window.addEventListener(`${prefix}-theme`, (event?: CustomEvent<"dark" | "light">) => {
    document.documentElement.dataset["theme"] = event.detail;
    localStorage.setItem("theme", event.detail);
});
