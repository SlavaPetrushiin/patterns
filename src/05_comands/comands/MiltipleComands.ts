import { IComand } from './types';

export class MultipleComands implements IComand {
    onComands: IComand[];
    offComands: IComand[];

    constructor(onComands: IComand[] = [], offComands: IComand[] = []) {
        this.onComands = onComands;
        this.offComands = offComands;
    }

    execute() {
        this.onComands.map(comand => comand.execute());
    }

    undo() {
        this.offComands.map(comand => comand.execute());
    }
}