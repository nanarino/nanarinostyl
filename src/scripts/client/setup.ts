// CSS Houdini
if (CSS && 'paintWorklet' in CSS) {
    CSS.paintWorklet.addModule(
        new URL(`../../assets/paint`, import.meta.url).href
    );
}

// Web Components
import "css-doodle";
