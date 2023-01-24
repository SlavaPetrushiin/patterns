import { StereoOffComand } from './comands/stereoComands/StereoOffComand';
import { CeilingLowComand } from './comands/ceilingComands/CeilingLowComand';
import { IComand } from './comands/types';
import { Stereo } from './actions/Stereo';
import { GarageDoor } from './actions/GarageDoor';
import { RemoteControl } from "./RemoteControl";
import { Light } from "./actions/Light";
import { LightOnCommand } from "./comands/lightComands/LightOnCommand";
import { CeilingFan } from './actions/CeilingFan';
import { LightOffCommand } from './comands/lightComands/LightOffCommand';
import { CeilingHighComand } from './comands/ceilingComands/CeilingHigh';
import { StereoOnWithCDVolumeComands } from './comands/stereoComands/StereoOnWithCDVolumeComands';

export class RemoteControlTest {
    kitchenLight: Light;
    roomLight: Light;
    ceilingFan: CeilingFan;
    garageDoor: GarageDoor;
    stereo: Stereo;

    livingRoomLightOn: IComand;
    livingRoomLightOff: IComand;
    livingKitchenLightOn: IComand;
    livingKitchenLightOff: IComand;
    ceilingFanLow: IComand;
    ceilingFanHigh: IComand;
    stereoOnWithCD: IComand;
    stereoOff: IComand;

    onComandsForParty: IComand[];
    offComandForParty: IComand[];

    remote: RemoteControl;

    constructor() {
        //Лист устройст
        this.kitchenLight = new Light("Kitchen Light");
        this.roomLight = new Light("Room Light");
        this.ceilingFan = new CeilingFan("Kitchen");
        this.garageDoor = new GarageDoor();
        this.stereo = new Stereo();

        //Лист команд
        this.livingRoomLightOn = new LightOnCommand(this.roomLight);
        this.livingRoomLightOff = new LightOffCommand(this.roomLight);
        this.livingKitchenLightOn = new LightOnCommand(this.kitchenLight);
        this.livingKitchenLightOff = new LightOffCommand(this.kitchenLight);

        this.ceilingFanLow = new CeilingLowComand(this.ceilingFan);
        this.ceilingFanHigh = new CeilingHighComand(this.ceilingFan);

        this.stereoOnWithCD = new StereoOnWithCDVolumeComands(this.stereo);
        this.stereoOff = new StereoOffComand(this.stereo);

        //Создание пульта
        this.remote = new RemoteControl();

        //Добавление команд слотам
        this.onComandsForParty = [this.livingRoomLightOn, this.ceilingFanHigh, this.stereoOnWithCD];
        this.offComandForParty = [this.stereoOff, this.ceilingFanLow, this.livingRoomLightOff];

        this.remote.setComand(0, this.livingRoomLightOn, this.livingRoomLightOff);
        this.remote.setComand(1, this.livingKitchenLightOn, this.livingKitchenLightOff);
        this.remote.setComand(2, this.ceilingFanLow, this.ceilingFanHigh);
        this.remote.setComand(3, this.stereoOnWithCD, this.stereoOff);
        // this.remote.setComand(4, this.onComandsForParty, this.offComandForParty);
    }


    public main(args: string[]) {
        this.remote.onButtonWasPushed(0);
        this.remote.offButtonWasPushed(0);
        this.remote.undoButtonWasPushed()
        this.remote.onButtonWasPushed(1);
        this.remote.offButtonWasPushed(1);
        this.remote.undoButtonWasPushed()
        this.remote.onButtonWasPushed(2);
        this.remote.offButtonWasPushed(2);
        this.remote.undoButtonWasPushed()
        this.remote.onButtonWasPushed(3);
        this.remote.offButtonWasPushed(3);
        this.remote.undoButtonWasPushed()
    }
}

export const COMAND = () => {
    let test = new RemoteControlTest();

    test.main([]);
}

