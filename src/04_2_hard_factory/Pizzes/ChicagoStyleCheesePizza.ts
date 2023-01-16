import { Pizza } from "./Pizza";

export class ChicagoStyleCheesePizza extends Pizza {
    name = "Chicago Style Deep Dish Cheese Pizza";
    dough = "Extra Thick Crust Dough";
    sauce = "Plum Tomato Sauce";

    constructor() {
        super();
        this.toppings.push("Shredded Mozzarella Cheese")
    }

    public cut(): void {
        console.log("Cutting the pizza into square slices");
    }
}

