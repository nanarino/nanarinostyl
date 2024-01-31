declare namespace CSS {
    const paintWorklet: Worklet
}

interface Window {
    copy: (text: string, options?: {
        debug?: boolean
        message?: string
        format?: string // MIME type
        onCopy?: (clipboardData: object) => void
    }) => boolean
    readonly theme: "dark" | "light"
}

