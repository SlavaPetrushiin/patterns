import { Beverage } from "../drinks/Beverage";
import { CondimentsDecorator } from "./CondimentsDecorator";

export class Mocha extends CondimentsDecorator {
    public beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + " Mocha";
    }

    public cost(): number {
        let cost = this.beverage.cost();
        let size = this.beverage.getSize();

        switch (size) {
            case "TALL": {
                return cost += 0.10;
            }
            case "GRANDE": {
                return cost += 0.20;
            }
            case "VENTI": {
                return cost += 0.30;
            }
            default: {
                return cost;
            }
        }
    }
}