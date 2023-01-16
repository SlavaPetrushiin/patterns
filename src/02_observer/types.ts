import { WeatherData } from "./WeaterStation";

export interface ISubject {
    registerObserver: (object: IObserver) => void;
    removeObserver: (object: IObserver) => void;
    notifyObservers: () => void;
    setChanged: () => void;
    clearChanged: () => void;
    hasChanged: () => boolean;
}

export interface IObserver {
    update: (subject: WeatherData, arg?: {}) => void;
}

export interface IDisplayElement {
    display: () => void;
}