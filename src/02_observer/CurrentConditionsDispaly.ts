import { WeatherData } from './WeaterStation';

import { IDisplayElement, IObserver } from './types';
export class CurrentConditionsDispaly implements IObserver, IDisplayElement {
    private temperature: number | null;
    private humidity: number | null;
    private weatherData: WeatherData;

    constructor(subject: WeatherData) {
        this.weatherData = subject;
        this.temperature = null;
        this.humidity = null;

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
        console.log(`** CurrentConditionsDispaly **`);
        console.log(`temperature ${this.temperature}`);
        console.log(`humidity ${this.humidity}`);
        console.log(`/ -- end --/`);
    };

}