import { MenuComponent } from "./MenuComponent";

export class MenuItem extends MenuComponent {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public vegetarian: boolean
    ) {
        super()
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getPrice() {
        return this.price;
    }

    isVegetarian() {
        return this.vegetarian;
    }

    public print() {
        let result = " ";

        result += this.getName();

        if (this.isVegetarian()) {
            result += ", v";
        }

        result += (", " + this.getPrice());
        result += (", " + this.getDescription() + ".");

        console.log(result);
    }
}