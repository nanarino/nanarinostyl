import prefix from "src/scripts/prefix";
import sleep from "src/scripts/sleep";

const queue = document.getElementById("message-queue");

// 全局触发
window.addEventListener(`${prefix}-message`, async (event: CustomEvent<string>) => {

    const msg = document.createElement("div");

    msg.style.transition = "opacity 1s, height 2s";
    msg.innerHTML = `
        <div class="${prefix}-message">
            <p class="${prefix}-paragraph">${event.detail}</p>
        </div>
    `;

    queue.appendChild(msg);
    msg.style.height = `${msg.offsetHeight}px`;
    await sleep(2000);
    msg.style.opacity = '0';
    msg.style.height = '0';
    await sleep(2000);
    queue.removeChild(msg);
});
