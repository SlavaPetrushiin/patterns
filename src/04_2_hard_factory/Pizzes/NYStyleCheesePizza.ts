import { Pizza } from "./Pizza";

export class NYStyleCheesePizza extends Pizza {
    name = "NY Style Sauce and Cheese Pizza";
    dough = "Thin Crust Dough";
    sauce = "Marinara Sauce";

    constructor() {
        super();
        this.toppings.push("Grated Reggiano Cheese");
    }
}