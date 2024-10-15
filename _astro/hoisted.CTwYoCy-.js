import{p as d}from"./hoisted.BpBWYKSw.js";const t=`:doodle {
    @grid: 7 / 100%;
    border-radius: 50%;
}

transition: .2s @r(.6s);
@shape: clover 5;
background: hsla(-@i(*4), 70%, 68%, @r.8);
transform:
    scale(@r(.2, 1.5))
    translate(@m2.@r(±50%));
`,s=`:doodle {
    @grid: 8 / 100%;
    border-radius: 50%;
}

transition: .2s @r(.6s);
border-radius: @pick(100% 0, 0 100%);
transform: scale(@r(.25, 1.25));

background: hsla(
    calc(240 - 6 * @x * @y),
    70%, 68%, @r.8
)
`,e={light:s,dark:t};function o(){const n=document.querySelector("css-doodle");n&&(n.innerHTML=e[window.theme])}o();document.addEventListener("astro:after-swap",o);window.addEventListener(`${d}-theme`,n=>{const r=document.querySelector("css-doodle");r&&r.update(e[n.detail])});
