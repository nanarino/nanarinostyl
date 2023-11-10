import prefix from "src/scripts/prefix";
import colours from "./colors";

const launcher = document.getElementById("emit-message-kanban");

launcher.onclick = function (e) {
    const button = e.target as HTMLButtonElement;
    if (button.tagName === "BUTTON") {
        const { primary } = button.dataset;
        const style: Record<string, string> = {};
        if (primary == "random") {
            const color = colours[Math.floor((Math.random() * colours.length))];
            Reflect.set(style, "--background-color-message", `var(--${color}-5)`);
            Reflect.set(style, "--box-shadow-color", `var(--${color}-4)`);
        }
        window.dispatchEvent(
            new CustomEvent(`${prefix}-message`, {
                detail: {
                    content: "发射成功",
                    primary,
                    // duration: 100000,
                    style
                },
            })
        );
    }
};
