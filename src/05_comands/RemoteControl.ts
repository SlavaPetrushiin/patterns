import { Stereo } from './actions/Stereo';
import { GarageDoor } from './actions/GarageDoor';
import { CeilingFan } from './actions/CeilingFan';
import { Light } from './actions/Light';
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

    public setComand(slot: number, onComand: IComand, offComand: IComand) {
        this.onComands[slot] = onComand;
        this.offComands[slot] = offComand;
    }

    public onButtonWasPushed(slot: number) {
        this.onComands[slot].execute();
    }

    public offButtonWasPushed(slot: number) {
        this.offComands[slot].execute();
    }

}