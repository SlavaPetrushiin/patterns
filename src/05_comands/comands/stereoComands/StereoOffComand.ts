import { Stereo } from '../../actions/Stereo';
import { IComand } from '../types';

export class StereoOffComand implements IComand {
    stereo: Stereo;

    constructor(object: Stereo) {
        this.stereo = object;
    }

    execute() {
        this.stereo.off();
    }

    undo() {
        this.stereo.on();
    }
}