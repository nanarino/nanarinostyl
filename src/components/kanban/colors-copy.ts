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
                            width="1em"
                            height="1em"
                            astro-icon="tips/outline/check-circle"
                            style="color:rgb(var(--success-6))"
                        >
                            <use
                                xlink:href="#astroicon:tips/outline/check-circle"
                            >
                            </use>
                        </svg>
                        <span>
                            复制成功
                        </span>
                    `
                },
            })
        );
    }
};