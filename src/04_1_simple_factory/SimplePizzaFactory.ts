import { GreekPizza } from './Pizzes/GreekPizza';
import { CheesePizza } from './Pizzes/CheesePizza';
import { PepperoniPizza } from './Pizzes/PepperoniPizza';
import { Pizza } from "./Pizzes/Pizza";

export class SimplePizzaFactory {
    public createPizza(type: string): Pizza {
        let pizza: Pizza;
        switch (type) {
            case "cheese": {
                return pizza = new CheesePizza();
            }
            case "pepperoni": {
                return pizza = new PepperoniPizza();
            }
            case "greek": {
                return pizza = new GreekPizza();
            }
            default: {
                return pizza = new CheesePizza();
            }
        }
    }
}