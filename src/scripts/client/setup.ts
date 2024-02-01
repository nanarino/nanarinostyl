import js2url from "src/scripts/js2url";


/**
 * CSS Houdini
 */
import smoothCorners from "smooth-corners?raw";

if (CSS && 'paintWorklet' in CSS) {
    CSS.paintWorklet.addModule(js2url(smoothCorners));
}


/**
 * Web Components
 */
import "css-doodle";
