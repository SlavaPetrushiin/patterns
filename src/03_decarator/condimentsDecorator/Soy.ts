import { Beverage } from "../drinks/Beverage";
import { CondimentsDecorator } from "./CondimentsDecorator";

export class Soy extends CondimentsDecorator {
    public beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + " Soy";
    }

    public cost(): number {
        return 0.15 + this.beverage.cost();
    }
}