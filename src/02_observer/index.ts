import { CurrentConditionsDispaly } from './CurrentConditionsDispaly';
import { ForecastDisplay } from './ForecastDisplay';
import { StatisticsDisplay } from './StatisticsDisplay';
import { WeatherData } from './WeaterStation';
export const OBSERVER = () => {

    const weatherData = new WeatherData();

    const currentConditionsDispaly = new CurrentConditionsDispaly(weatherData);
    const statisticsDisplay = new StatisticsDisplay(weatherData);
    const forecastDisplay = new ForecastDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 75, 29.4);
    weatherData.setMeasurements(78, 90, 29.6);

    // weatherData.removeObserver(statisticsDisplay);
    // weatherData.setMeasurements(90, 90, 90);

}