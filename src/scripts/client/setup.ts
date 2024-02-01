// CSS Houdini
if (CSS && 'paintWorklet' in CSS) {
    console.log(new URL(`../../assets/paint.js`, import.meta.url))
    CSS.paintWorklet.addModule(
        new URL(`../../assets/paint.js`, import.meta.url).href
    );
}

// Web Components
import "css-doodle";
