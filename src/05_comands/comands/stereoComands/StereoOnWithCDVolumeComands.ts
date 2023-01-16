import { Stereo } from '../../actions/Stereo';
import { IComand } from '../types';

export class StereoOnWithCDVolumeComands implements IComand {
    stereo: Stereo;

    constructor(object: Stereo) {
        this.stereo = object;
    }

    execute() {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume();
    }
}