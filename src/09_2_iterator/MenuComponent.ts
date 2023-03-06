export abstract class MenuComponent {
    public add(menuComponent: MenuComponent): void {
        throw new Error("Create method add menuComponent");
    }

    public remove(menuComponent: MenuComponent): void {
        throw new Error("Create method remove menuComponent");
    }

    public getChild(index: number): MenuComponent {
        throw new Error("Create method getChild menuComponent");
    }

    public getName(): string {
        throw new Error("Create method getName menuComponent");
    }

    public getDescription(): string {
        throw new Error("Create method getDescription menuComponent");
    }

    public getPrice(): number {
        throw new Error("Create method getPrice menuComponent");
    }

    public isVegetarian(): boolean {
        throw new Error("Create method isVegetarian menuComponent");
    }

    public print(): void {
        throw new Error("Create method print menuComponent");
    }
}