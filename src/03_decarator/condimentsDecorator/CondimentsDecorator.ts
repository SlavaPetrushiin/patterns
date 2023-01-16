import { Beverage } from "../drinks/Beverage";

export abstract class CondimentsDecorator extends Beverage {
    public abstract getDescription(): string;
}