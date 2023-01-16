import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "HouseBlend";
    }

    public cost(): number {
        return 0.89;
    }
}