import { IObserver, ISubject } from './types';
export class WeatherData implements ISubject {
    public observes: IObserver[];
    private temperature: number | null;
    private humidity: number | null;
    private pressure: number | null;
    private changed: boolean;

    constructor() {
        this.observes = [];
        this.temperature = null;
        this.humidity = null;
        this.pressure = null;
        this.changed = false;
    }

    public registerObserver = (object: IObserver): void => {
        this.observes.push(object)
    };

    public removeObserver = (object: IObserver): void => {
        this.observes = this.observes.filter(observer => observer != object);
    };

    public notifyObservers = (): void => {
        if (this.hasChanged()) {
            this.observes.forEach(observer => {
                observer.update(this);
            })

            this.clearChanged();
        }
    };

    public measurementsChanged(): void {
        this.setChanged();
        this.notifyObservers();
    }

    public setMeasurements(temp: number, humidity: number, pressure: number) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;

        this.measurementsChanged();
    }

    public setChanged(): void {
        this.changed = true;
    }

    public clearChanged(): void {
        this.changed = false;
    }

    public hasChanged(): boolean {
        return this.changed;
    }

    public getTemperature(): number | null {
        return this.temperature;
    }

    public getHumidity(): number | null {
        return this.humidity;
    }

    public getPressure(): number | null {
        return this.pressure;
    }
}