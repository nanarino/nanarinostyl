// CSS Houdini
if (CSS && 'paintWorklet' in CSS) {
    CSS.paintWorklet.addModule(
        new URL(`../../assets/paint.js`, import.meta.url).href
    );
}

// Web Components
import "css-doodle";
