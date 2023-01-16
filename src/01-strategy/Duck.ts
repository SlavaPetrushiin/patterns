import { IFlyBehavior } from './FlyBehavior';
import { IQuackBehavior } from "./QuackBehavior";

export abstract class Duck {
    abstract quackBehavior: IQuackBehavior;
    abstract flyBehavior: IFlyBehavior;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    public swim(): void {
        console.log(`${this.name} can swim`);
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public setFlyBehavior(flyBehavior: IFlyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    public setQuackBehavior(quackBehavior: IQuackBehavior) {
        this.quackBehavior = quackBehavior;
    }

    abstract dispaly(): void;
}