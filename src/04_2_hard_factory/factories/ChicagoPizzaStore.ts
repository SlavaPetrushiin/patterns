import { ChicagoStyleCheesePizza } from './../Pizzes/ChicagoStyleCheesePizza';
import { PizzaStore } from './PizzaStore'; ""

import { Pizza } from "../Pizzes/Pizza";

export class ChicagoPizzaStore extends PizzaStore {
    public createPizza(type: string): Pizza {
        let pizza: Pizza;
        switch (type) {
            case "cheese": {
                return pizza = new ChicagoStyleCheesePizza();
            }
            default: {
                return pizza = new ChicagoStyleCheesePizza();
            }
        }
    }
}