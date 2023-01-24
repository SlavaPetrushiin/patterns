import { IComand } from './types';

export class NoComand implements IComand {
    execute() { }
    undo() { }
}