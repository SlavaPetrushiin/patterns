import { CeilingFan } from '../../actions/CeilingFan';
import { IComand } from './../types';

export abstract class AbstractCeilingComand implements IComand {
    ceiling: CeilingFan;
    prevSpeed: number;

    constructor(object: CeilingFan) {
        this.ceiling = object;
        this.prevSpeed = object.getSpeed();
    }

    abstract execute(): void;

    public undo() {
        if (this.prevSpeed == CeilingFan.HIGH) {
            this.ceiling.high();
        } else if (this.prevSpeed == CeilingFan.MEDIUM) {
            this.ceiling.medium();
        } else if (this.prevSpeed == CeilingFan.LOW) {
            this.ceiling.low();
        } else if (this.prevSpeed == CeilingFan.OFF) {
            this.ceiling.off();
        }
    }
}