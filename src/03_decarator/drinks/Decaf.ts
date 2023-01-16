import { Beverage } from "./Beverage";

export class Decaf extends Beverage {
    constructor() {
        super();
        this.description = "Decaf";
    }

    public cost() {
        return 1.05;
    };
}