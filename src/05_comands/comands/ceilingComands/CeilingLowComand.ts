import { CeilingFan } from '../../actions/CeilingFan';
import { IComand } from '../types';


export class CeilingLowComand implements IComand {
    ceiling: CeilingFan;

    constructor(object: CeilingFan) {
        this.ceiling = object;
    }

    execute() {
        this.ceiling.low();
    }
}