import{p as a}from"./prefix.DdUm4vFL.js";import{d as i}from"./dedent.DVFkJXTl.js";document.addEventListener("astro:page-load",()=>{const t=document.getElementById("colors-kanban");t&&(t.onclick=function(n){const e=n.target;e.tagName==="BUTTON"&&e.title&&(window.copy(`rgb(var(${e.title}))`),window.dispatchEvent(new CustomEvent(`${a}-message`,{detail:{content:i`
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
                            `}})))})});
