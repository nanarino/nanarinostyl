import prefix from "src/scripts/prefix";

interface Doodle extends HTMLElement {
    update: (styles: string) => void
}

const doodle = document.querySelector('css-doodle') as Doodle;

const style = {

    light: `

        :doodle {
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

    `,

    dark: `

        :doodle {
            @grid: 7 / 100%;
            border-radius: 50%;
        }

        @shape: clover 5;
        background: hsla(-@i(*4), 70%, 68%, @r.8);
        transform:
            scale(@r(.2, 1.5))
            translate(@m2.@r(±50%));

    `
}

window.addEventListener("load", () => doodle.update(style[window.theme]));

window.addEventListener(`${prefix}-theme`, (event: CustomEvent<"dark" | "light">)  => {
    doodle.update(style[event.detail]);
});
