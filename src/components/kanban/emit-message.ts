import prefix from "src/scripts/prefix";
import colours from "./colors";

const launcher = document.getElementById("emit-message-kanban");

launcher.onclick = function (e) {
    const button = e.target as HTMLButtonElement;
    if (button.tagName === "BUTTON") {
        const primary = Object.hasOwn(button.dataset, "primary");
        const style: Record<string, string> = {};
        if (primary) {
            let color = Reflect.get(button.dataset, "color") || "primary";
            Reflect.set(style, "--background-color-message", `var(--${color}-5)`);
            Reflect.set(style, "--box-shadow-color", `var(--${color}-4)`);

            color = colours[Math.floor((Math.random() * colours.length))];
            button.innerText = color;
            button.dataset.color = color;
            button.style.setProperty("--background-color-button", `var(--${color}-5)`)
            button.style.setProperty("--background-color-button-focus", `var(--${color}-6)`)
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
