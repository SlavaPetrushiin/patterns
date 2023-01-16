export enum Sizes {
    TALL = "TALL",
    GRANDE = "GRANDE",
    VENTI = "GRANDE"
}

export type KeysSize = keyof typeof Sizes;

export abstract class Beverage {
    description: string;
    size: KeysSize = Sizes.TALL;
    sizes = Sizes;
    public abstract cost(): number;

    constructor() {
        this.description = "Unknown Beverage";
    }

    public getDescription(): string {
        return this.description;
    }

    public setSize(size: KeysSize): void {
        this.size = size;
    }

    public getSize(): KeysSize {
        return this.size;
    }
}