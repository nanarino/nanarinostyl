export const CIRCLE_OF_FIFTHS = ["F", "C", "G", "D", "A", "E", "B"] as const;

export type Key = typeof CIRCLE_OF_FIFTHS[number];

export const OFFSET_SYMBOL = {
    sharp: '#',
    flat: 'b'
} as const;

export const offsetRange = [7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7] as const;

export class KeySignature {
    public key: Key;
    constructor(key: Key) {
        this.key = key;
    }
    get keyIndex() {
        return CIRCLE_OF_FIFTHS.indexOf(this.key);
    }
    offset(sharps: typeof offsetRange[number]) {
        const index = this.keyIndex + sharps;
        let symbol: '#' | 'b' | '' = "";
        if (index >= CIRCLE_OF_FIFTHS.length) {
            symbol = OFFSET_SYMBOL.sharp;
        } else if (index < 0) {
            symbol = OFFSET_SYMBOL.flat;
        }
        return CIRCLE_OF_FIFTHS.at(index % CIRCLE_OF_FIFTHS.length) + symbol;
    }
}
