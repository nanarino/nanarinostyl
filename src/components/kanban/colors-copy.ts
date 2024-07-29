import prefix from "src/scripts/prefix"
import dedent from "dedent"

document.addEventListener("astro:page-load", () => {
    const table = document.getElementById("colors-kanban")

    if (table)
        table.onclick = function (e) {
            const button = e.target as HTMLButtonElement
            if (button.tagName === "BUTTON" && button.title) {
                window.copy(`rgb(var(${button.title}))`)
                window.dispatchEvent(
                    new CustomEvent(`${prefix}-message`, {
                        detail: {
                            content: dedent`
                                <svg
                                    class="${prefix}-message-prefix"
                                    data-icon="tips/outline/check-circle"
                                    data-primary="success"
                                    viewBox="0 0 48 48"
                                >
                                    <use
                                        xlink:href="#ai:local:tips/outline/check-circle"
                                    ></use>
                                </svg>
                                <span>
                                    复制成功
                                </span>
                            `,
                            // duration: 100000,
                        },
                    })
                )
            }
        }
})
