import prefix from "src/scripts/prefix";


window.addEventListener(`${prefix}-message`, (event: CustomEvent<string>) => {

    const queue = document.getElementById("message-queue");

    const msg = document.createElement("div");
    
    msg.className = `${prefix}-message`;
    
    msg.innerHTML = `<p class="${prefix}-paragraph" data-ellipsis="l1">${event.detail}</p>`;
    
    queue.appendChild(msg);
}) 
