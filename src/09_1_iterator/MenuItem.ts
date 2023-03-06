export class MenuItem {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public vegetarian: boolean
    ) { }

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
}