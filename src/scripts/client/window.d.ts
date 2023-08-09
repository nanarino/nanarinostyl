interface Window {
    copy: (text: string, options?: {
        debug?: boolean;
        message?: string;
        format?: string; // MIME type
        onCopy?: (clipboardData: object) => void;
    }) => boolean
}

declare const windos: Window & typeof globalThis
declare module "copy"
