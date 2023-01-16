import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyBehavior";
import { Quack } from "./QuackBehavior";

export class RedHeadDuck extends Duck {
    constructor(name: string) {
        super(name);
    }

    quackBehavior = new Quack();
    flyBehavior = new FlyWithWings();

    dispaly(): void {
        console.log(this.name);
    }
}