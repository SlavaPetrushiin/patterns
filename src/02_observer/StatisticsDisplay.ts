import { WeatherData } from './WeaterStation';
import { IObserver, IDisplayElement, ISubject } from './types';

export class StatisticsDisplay implements IObserver, IDisplayElement {
    private temperature: number | null;
    private humidity: number | null;
    private pressure: number | null;
    private weatherData: WeatherData;

    constructor(subject: WeatherData) {
        this.weatherData = subject;
        this.temperature = null;
        this.humidity = null;
        this.pressure = null;

        this.weatherData.registerObserver(this);
    }

    update(subject: WeatherData, arg: any): void {
        if (subject instanceof WeatherData) {
            this.weatherData = subject;
            this.temperature = subject.getTemperature();
            this.humidity = subject.getHumidity();
            this.display();
        }
    };

    display(): void {
        console.log(`** StatisticsDisplay **`);
        console.log(`temperature ${this.temperature}`);
        console.log(`humidity ${this.humidity}`);
        console.log(`pressure ${this.pressure}`);
        console.log(`/ -- end --/`);
    };
}