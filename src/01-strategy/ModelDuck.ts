import { FlyNoWay } from './FlyBehavior';
import { Quack } from './QuackBehavior';
import { Duck } from "./Duck";

export class ModelDuck extends Duck {
    constructor(name: string) {
        super(name);
    }

    quackBehavior = new Quack();
    flyBehavior = new FlyNoWay();

    dispaly(): void {
        console.log(this.name + " I’m a model duck");
    }
}