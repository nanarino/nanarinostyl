import prefix from "src/scripts/prefix";

const table = document.getElementById("colors-kanban");

table.onclick = function (e) {
    const button = e.target as HTMLButtonElement;
    if (button.tagName === "BUTTON" && button.title) {
        window.copy(`rgb(var(${button.title}))`);
        window.dispatchEvent(
            new CustomEvent(`${prefix}-message`, {
                detail: {
                    content: `
                        <svg
                            class="${prefix}-message-prefix"
                            data-icon="tips/outline/check-circle"
                            data-primary="success"
                        >
                            <use
                                xlink:href="#astroicon:tips/outline/check-circle"
                            >
                            </use>
                        </svg>
                        <span>
                            复制成功
                        </span>
                    `,
                    // duration: 100000,
                },
            })
        );
    }
};