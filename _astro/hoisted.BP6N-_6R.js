import{p as a}from"./hoisted.CkYcegt6.js";const l=document.getElementById("colors-kanban");l.onclick=function(n){const e=n.target;e.tagName==="BUTTON"&&e.title&&(window.copy(`rgb(var(${e.title}))`),window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:`
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
                    `}})))};const c=["red","orange","gold","yellow","lime","green","cyan","blue","purple","pinkpurple","magenta","gray"],i=["check","close","exclamation","info"],r=document.getElementById("emit-message-kanban");r.onclick=function(n){const e=n.target;if(e.tagName==="BUTTON"){const s=Object.hasOwn(e.dataset,"primary"),o=i[Math.floor(Math.random()*i.length)];if(s){let t=Reflect.get(e.dataset,"color")||"primary";window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:`
                            <svg 
                                class="${a}-message-prefix"
                                data-icon="tips/fill/${o}-circle-fill"
                                viewBox="0 0 48 48"
                            >
                                <use
                                    xlink:href="#ai:local:tips/fill/${o}-circle-fill"
                                ></use>
                            </svg>
                            <span>
                                发射成功
                            </span>
                        `,primary:s,style:{"--background-color-message":`var(--${t}-5)`,"--box-shadow-color":`var(--${t}-4)`}}})),t=c[Math.floor(Math.random()*c.length)],e.innerText=t,e.dataset.color=t,e.style.setProperty("--background-color-button",`var(--${t}-5)`),e.style.setProperty("--background-color-button-focus",`var(--${t}-6)`)}else window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:`
                            <svg 
                                class="${a}-message-prefix"
                                data-icon="tips/outline/${o}-circle"
                                data-primary="${{check:"success",close:"danger",exclamation:"warning",info:""}[o]}"
                                viewBox="0 0 48 48"
                            >
                                <use
                                    xlink:href="#ai:local:tips/outline/${o}-circle"
                                ></use>
                            </svg>
                            <span>
                                发射成功
                            </span>
                        `,primary:s}}))}};
