interface Window {
    copy: (text: string, options?: {
        debug?: boolean;
        message?: string;
        format?: string; // MIME type
        onCopy?: (clipboardData: object) => void;
    }) => boolean,
    theme?: "dark" | "light"
}

declare const windos: Window & typeof globalThis
