export interface IFlyBehavior {
    fly: () => void;
}

export class FlyWithWings implements IFlyBehavior {
    fly() {
        console.log(`I can fly`);
    }
}

export class FlyNoWay implements IFlyBehavior {
    fly() {
        console.log(`I cannot fly`);
    }
}

export class FlyRocketPowered implements IFlyBehavior {
    fly() {
        console.log("I’m flying with a rocket!");
    };
}