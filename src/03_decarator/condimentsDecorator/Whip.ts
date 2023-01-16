import { Beverage } from "../drinks/Beverage";
import { CondimentsDecorator } from "./CondimentsDecorator";

export class Whip extends CondimentsDecorator {
    public beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + " Whip";
    }

    public cost(): number {
        return 0.10 + this.beverage.cost();
    }
}