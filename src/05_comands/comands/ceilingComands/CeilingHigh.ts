import { CeilingFan } from '../../actions/CeilingFan';
import { IComand } from './../types';


export class CeilingHighComand implements IComand {
    ceiling: CeilingFan;

    constructor(object: CeilingFan) {
        this.ceiling = object;
    }

    execute() {
        this.ceiling.high();
    }
}