import copy from "copy-to-clipboard"

declare global {
    interface Window {
        copy: typeof copy
    }
    namespace CSS {
        const paintWorklet: Worklet
    }
}
