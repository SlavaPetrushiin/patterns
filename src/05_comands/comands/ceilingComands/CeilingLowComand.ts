import { CeilingFan } from '../../actions/CeilingFan';
import { IComand } from '../types';
import { AbstractCeilingComand } from './AbstractCeilingComand';


export class CeilingLowComand extends AbstractCeilingComand {
    constructor(object: CeilingFan) {
        super(object)
    }

    execute() {
        this.prevSpeed = this.ceiling.getSpeed(); //получить скороть перед тем как её переключить
        this.ceiling.low();
    }
}