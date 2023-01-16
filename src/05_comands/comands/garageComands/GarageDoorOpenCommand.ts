import { GarageDoor } from '../../actions/GarageDoor';
import { IComand } from '../types';

export class GarageDoorOpenCommand implements IComand {
    garage: GarageDoor;

    constructor(object: GarageDoor) {
        this.garage = object;
    }

    execute() {
        this.garage.up();
    }
}