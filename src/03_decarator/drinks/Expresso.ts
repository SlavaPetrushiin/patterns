import { Beverage } from "./Beverage";

export class Expresso extends Beverage {
    constructor() {
        super();
        this.description = "Exspresso";
    }

    public cost() {
        return 1.99;
    };
}