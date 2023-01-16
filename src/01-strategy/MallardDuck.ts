import { FlyWithWings } from './FlyBehavior';
import { Quack } from './QuackBehavior';
import { Duck } from "./Duck";

export class MallardDuck extends Duck {
    constructor(name: string) {
        super(name);
    }

    quackBehavior = new Quack();
    flyBehavior = new FlyWithWings();

    dispaly(): void {
        console.log(this.name);
    }
}

