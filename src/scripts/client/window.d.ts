interface Window {
    copy: (text: string, options?: {
        debug?: boolean;
        message?: string;
        format?: string; // MIME type
        onCopy?: (clipboardData: object) => void;
    }) => boolean,
    readonly theme: "dark" | "light"
}

declare const window: Window & typeof globalThis
