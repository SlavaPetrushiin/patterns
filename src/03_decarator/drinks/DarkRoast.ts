import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "DarkRoast";
    }

    public cost() {
        return 1;
    };
}