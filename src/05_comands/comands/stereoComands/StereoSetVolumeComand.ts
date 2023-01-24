import { Stereo } from '../../actions/Stereo';
import { IComand } from '../types';

export class StereoSetVolumeComand implements IComand {
    stereo: Stereo;

    constructor(object: Stereo) {
        this.stereo = object;
    }

    execute() {
        this.stereo.setVolume();
    }

    undo() {
        this.stereo.off();
    }
}