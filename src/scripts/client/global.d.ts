import copy from "copy-to-clipboard"

declare global {
    interface Window {
        copy: typeof copy
    }
}

declare namespace CSS {
    const paintWorklet: Worklet
}
