import { NoComand } from './comands/NoComand';
import { IComand } from "./comands/types";

export class SimpleRemoteControl {
    slot: IComand;

    constructor(command: IComand) {
        this.slot = command;
    }

    setCommand(command: IComand) {
        this.slot = command;
    }

    public buttonWasPressed(): void {
        this.slot.execute();
    }
}

export class RemoteControl {
    onComands: IComand[] = [];
    offComands: IComand[] = [];
    undoComand: IComand;

    constructor() {
        this.undoComand = new NoComand();
    }

    public setComand(slot: number, onComand: IComand, offComand: IComand) {
        this.onComands[slot] = onComand;
        this.offComands[slot] = offComand;
    }

    public onButtonWasPushed(slot: number) {
        this.onComands[slot].execute();
        this.undoComand = this.onComands[slot];
    }

    public offButtonWasPushed(slot: number) {
        this.offComands[slot].execute();
        this.undoComand = this.offComands[slot];
    }

    public undoButtonWasPushed() {
        this.undoComand.undo();
    }

}