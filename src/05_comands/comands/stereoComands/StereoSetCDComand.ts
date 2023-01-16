import { Stereo } from '../../actions/Stereo';
import { IComand } from '../types';

export class StereoSetCDComand implements IComand {
    stereo: Stereo;

    constructor(object: Stereo) {
        this.stereo = object;
    }

    execute() {
        this.stereo.setCd();
    }
}