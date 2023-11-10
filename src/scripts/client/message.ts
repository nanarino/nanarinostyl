import prefix from "src/scripts/prefix";
import sleep from "src/scripts/sleep";

// const queue = document.createElement("div");
const queue = document.getElementById("message-queue");

// 全局触发
window.addEventListener(`${prefix}-message`, async (
    event: CustomEvent<string | {
        content?: string
        primary?: "success" | "danger" | "warning" | "primary"
        duration?: number
    }>
) => {

    const msg = document.createElement("div");

    /**
     * `final duration:number;` ❌
     * `var duration:number = 2000;` ✔
     * 
     * 由于继承的模板项目配置的松散类型检查，
     * 变量很可能在分配前使用而不报错，
     * 你最好初始化默认值。
     * 
     * 检查项目其他地方有没有这个问题
     */
    let duration: number = 2000;
    let primary: string = "";
    let content = event.detail ?? "☘";

    if (typeof content != 'string') {
        duration = content.duration ?? 2000;
        /**
         * 由于继承的模板项目配置的松散类型检查，
         * undefined 和 null的 `.toString()` 还是会报错
         * 而使用 `${}` 风险更大 需要指定默认值
         */
        primary = `${content.primary ?? ""}`;

        content = `${content.content ?? "☘"}`;
    }

    msg.innerHTML = `
        <div class="${prefix}-message">
            <p class="${prefix}-paragraph">${content}</p>
        </div>
    `;
    if (primary) {
        const p = (msg.firstElementChild as HTMLDivElement)
        p.dataset.primary = primary;
        if (primary == "random") {
            const colours = [
                "red",
                "orangered",
                "orange",
                "gold",
                "yellow",
                "lime",
                "green",
                "cyan",
                "blue",
                "purple",
                "pinkpurple",
                "magenta",
                "gray",
            ] as const;
            const color = colours[Math.floor((Math.random() * colours.length))];
            p.style.setProperty("--background-color-message", `var(--${color}-5)`);
            p.style.setProperty("--box-shadow-color", `var(--${color}-4)`);
        }
    }

    queue.appendChild(msg);
    msg.style.height = `${msg.offsetHeight}px`;
    msg.style.transition = "opacity 1s, height 2s";
    await sleep(duration);
    msg.style.opacity = '0';
    msg.style.height = '0';
    await sleep(2000); // 2000对应 transition height 2s
    queue.removeChild(msg);
});
