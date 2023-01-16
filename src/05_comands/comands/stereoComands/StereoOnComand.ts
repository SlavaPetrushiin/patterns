import { Stereo } from '../../actions/Stereo';
import { IComand } from './../types';

export class StereoOnComand implements IComand {
    stereo: Stereo;

    constructor(object: Stereo) {
        this.stereo = object;
    }

    execute() {
        this.stereo.on();
    }
}