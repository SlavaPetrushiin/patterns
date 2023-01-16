import { FlyWithWings } from './FlyBehavior';
import { Duck } from "./Duck";
import { Quack } from "./QuackBehavior";

export class DecoyDuck extends Duck {
    constructor(name: string) {
        super(name);
    }

    quackBehavior = new Quack();
    flyBehavior = new FlyWithWings();

    dispaly(): void {
        console.log(this.name);
    }
}