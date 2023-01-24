import { CeilingFan } from '../../actions/CeilingFan';
import { AbstractCeilingComand } from './AbstractCeilingComand';

export class CeilingHighComand extends AbstractCeilingComand {
    constructor(object: CeilingFan) {
        super(object);
    }

    execute() {
        this.prevSpeed = this.ceiling.getSpeed(); //получить скороть перед тем как её переключить
        this.ceiling.high();
    }
}