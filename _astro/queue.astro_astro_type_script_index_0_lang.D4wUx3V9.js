import{p as n}from"./prefix.DdUm4vFL.js";import{d as m}from"./dedent.DVFkJXTl.js";function p(i){return new Promise(s=>setTimeout(s,i))}window.addEventListener(`${n}-message`,async i=>{const s=document.getElementById("message-queue"),e=document.createElement("div");let r=2e3,a=!1,o={},t=i.detail??"☘";if(typeof t!="string"&&(r=t.duration??2e3,a=t.primary??!1,o=t.style??{},t=`${t.content??"☘"}`),e.innerHTML=m`
            <div class="${n}-message">
                <p class="${n}-paragraph">${t}</p>
            </div>
        `,a){const l=e.firstElementChild;l.dataset.primary=a.toString(),Object.entries(o).map(d=>l.style.setProperty(...d))}s.appendChild(e),e.style.height=`${e.offsetHeight}px`,e.style.transition="opacity 1s, height 2s",await p(r),e.style.opacity="0",e.style.height="0",await p(2e3),s.removeChild(e)});
