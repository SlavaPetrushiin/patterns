import { Pizza } from "./Pizza";

export class CaliforniaStylePepperoniPizza extends Pizza {
    name = "California Style peperoni Pizza";
    dough = "Extra Thick Crust Dough";
    sauce = "Plum Tomato Sauce";

    constructor() {
        super();
        this.toppings.push("Cheese, tomatos, beef")
    }
}