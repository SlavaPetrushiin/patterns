import { ModelDuck } from './ModelDuck';
import { DecoyDuck } from './DecoyDuck';
import { RubberDuck } from './RubberDuck';
import { RedHeadDuck } from './RedHeadDuck';
import { MallardDuck } from "./MallardDuck";
import { FlyRocketPowered } from './FlyBehavior';

export const STRATEGY = () => {
    type KeysDucks = keyof typeof ducks;

    const ducks = {
        mallardDuck: new MallardDuck("MallardDuck"),
        redHeadDuck: new RedHeadDuck("RedHeadDuck"),
        rubberDuck: new RubberDuck("RubberDuck"),
        decoyDuck: new DecoyDuck("DecoyDuck")
    }

    for (let key in ducks) {
        let duck = ducks[key as KeysDucks];
        duck.dispaly();
        duck.performQuack();
        duck.performFly();
        console.log("----- End -----");
    }

    const modelDuck = new ModelDuck("ModelDuck");
    modelDuck.performFly();
    modelDuck.setFlyBehavior(new FlyRocketPowered());
    modelDuck.performFly();
}
