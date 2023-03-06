import { MenuComponent } from './MenuComponent';

export class Menu extends MenuComponent {
    menuComponents: MenuComponent[] = [];
    name: string;
    description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public add(menuComponent: MenuComponent): void {
        this.menuComponents.push(menuComponent);
    }

    public remove(menuComponent: MenuComponent): void {
        this.menuComponents = this.menuComponents.filter(m => m != menuComponent);
    }

    public getChild(i: number): MenuComponent {
        return this.menuComponents[i];
    }

    public print(): void {
        let result = this.getName() + ", " + this.getDescription() + "\n" + "-------- ---------"

        console.log(result);
        this.menuComponents.forEach(item => item.print())
    }
}   