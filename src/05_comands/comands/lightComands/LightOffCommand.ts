import { Light } from '../../actions/Light';
import { IComand } from "../types";

export class LightOffCommand implements IComand {
    light: Light;

    constructor(object: Light) {
        this.light = object;
    }

    execute() {
        this.light.off();
    }

    undo() {
        this.light.on();
    }
}