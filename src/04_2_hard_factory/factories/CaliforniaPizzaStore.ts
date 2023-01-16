import { PizzaStore } from './PizzaStore';
import { Pizza } from "../Pizzes/Pizza";
import { CaliforniaStylePepperoniPizza } from '../Pizzes/CaliforniaStylePepperoniPizza';

export class CaliforniaPizzaStore extends PizzaStore {
    public createPizza(type: string): Pizza {
        let pizza: Pizza;
        switch (type) {
            case "pepperoni": {
                return pizza = new CaliforniaStylePepperoniPizza();
            }
            default: {
                return pizza = new CaliforniaStylePepperoniPizza();
            }
        }
    }
}