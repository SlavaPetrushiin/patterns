import { Light } from './../../actions/Light';
import { IComand } from "./../types";

export class LightOnCommand implements IComand {
    light: Light;

    constructor(object: Light) {
        this.light = object;
    }

    execute() {
        this.light.on();
    }

    undo() {
        this.light.off();
    }
}