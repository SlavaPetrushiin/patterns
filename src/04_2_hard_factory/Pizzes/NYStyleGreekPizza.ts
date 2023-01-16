import { Pizza } from "./Pizza";

export class NYStyleGreekPizza extends Pizza {
    name = "NY Style Sauce and Cheek Pizza";
    dough = "Thin Crust Dough";
    sauce = "Marinara Sauce";

    constructor() {
        super();
        this.toppings.push("Tomatos");
    }
}