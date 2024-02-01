/**
 * CSS Houdini
 */
import smoothCorners from "smooth-corners?url";

if (CSS && 'paintWorklet' in CSS) {
    CSS.paintWorklet.addModule(smoothCorners);
}


/**
 * Web Components
 */
import "css-doodle";
