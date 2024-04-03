import{p as a}from"./hoisted.D4KOvlb1.js";document.addEventListener("astro:page-load",()=>{const o=document.getElementById("colors-kanban");o&&(o.onclick=function(s){const e=s.target;e.tagName==="BUTTON"&&e.title&&(window.copy(`rgb(var(${e.title}))`),window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:`
                        <svg
                            class="${a}-message-prefix"
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
                    `}})))})});const i=["red","orange","gold","yellow","lime","green","cyan","blue","purple","pinkpurple","magenta","gray"],l=["check","close","exclamation","info"];document.addEventListener("astro:page-load",()=>{const o=document.getElementById("emit-message-kanban");o&&(o.onclick=function(s){const e=s.target;if(e.tagName==="BUTTON"){const c=Object.hasOwn(e.dataset,"primary"),n=l[Math.floor(Math.random()*l.length)];if(c){let t=Reflect.get(e.dataset,"color")||"primary";window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:`
                            <svg 
                                class="${a}-message-prefix"
                                data-icon="tips/fill/${n}-circle-fill"
                                viewBox="0 0 48 48"
                            >
                                <use
                                    xlink:href="#ai:local:tips/fill/${n}-circle-fill"
                                ></use>
                            </svg>
                            <span>
                                发射成功
                            </span>
                        `,primary:c,style:{"--background-color-message":`var(--${t}-5)`,"--box-shadow-color":`var(--${t}-4)`}}})),t=i[Math.floor(Math.random()*i.length)],e.innerText=t,e.dataset.color=t,e.style.setProperty("--background-color-button",`var(--${t}-5)`),e.style.setProperty("--background-color-button-focus",`var(--${t}-6)`)}else window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:`
                            <svg 
                                class="${a}-message-prefix"
                                data-icon="tips/outline/${n}-circle"
                                data-primary="${{check:"success",close:"danger",exclamation:"warning",info:""}[n]}"
                                viewBox="0 0 48 48"
                            >
                                <use
                                    xlink:href="#ai:local:tips/outline/${n}-circle"
                                ></use>
                            </svg>
                            <span>
                                发射成功
                            </span>
                        `,primary:c}}))}})});
