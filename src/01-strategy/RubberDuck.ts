import { Duck } from "./Duck";
import { FlyNoWay } from "./FlyBehavior";
import { MuteQuck } from "./QuackBehavior";

export class RubberDuck extends Duck {
    constructor(name: string) {
        super(name);
    }

    quackBehavior = new MuteQuck();
    flyBehavior = new FlyNoWay();

    quack(): void {
        console.log(`${this.name} cannot quack`);
    }

    fly(): void {
        console.log(`${this.name} cannot fly`);
    }

    dispaly(): void {
        console.log(this.name);
    }
}