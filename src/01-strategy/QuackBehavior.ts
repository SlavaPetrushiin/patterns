export interface IQuackBehavior {
    quack: () => void;
}

export class Quack implements IQuackBehavior {
    quack() {
        console.log("I can quack");
    }
}

export class Squack implements IQuackBehavior {
    quack() {
        console.log("I can beeping");
    }
}

export class MuteQuck implements IQuackBehavior {
    quack() {
        console.log("I cannot  quack and beeping.");
    }
}