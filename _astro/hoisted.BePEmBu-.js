import{p as a,d as i}from"./hoisted.DbOOHfS7.js";document.addEventListener("astro:page-load",()=>{const n=document.getElementById("colors-kanban");n&&(n.onclick=function(s){const e=s.target;e.tagName==="BUTTON"&&e.title&&(window.copy(`rgb(var(${e.title}))`),window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:i`
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
                            `}})))})});const l=["red","orange","gold","yellow","lime","green","cyan","blue","purple","pinkpurple","magenta","gray"],r=["check","close","exclamation","info"];document.addEventListener("astro:page-load",()=>{const n=document.getElementById("emit-message-kanban");n&&(n.onclick=function(s){const e=s.target;if(e.tagName==="BUTTON"){const c=Object.hasOwn(e.dataset,"primary"),o=r[Math.floor(Math.random()*r.length)];if(c){let t=Reflect.get(e.dataset,"color")||"primary";window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:i`
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
                                `,primary:c,style:{"--background-color-message":`var(--${t}-5)`,"--box-shadow-color":`var(--${t}-4)`}}})),t=l[Math.floor(Math.random()*l.length)],e.innerText=t,e.dataset.color=t,e.style.setProperty("--background-color-button",`var(--${t}-5)`),e.style.setProperty("--background-color-button-focus",`var(--${t}-6)`)}else window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:i`
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
                                `,primary:c}}))}})});
