import { NYStyleGreekPizza } from './../Pizzes/NYStyleGreekPizza';
import { PizzaStore } from './PizzaStore';
import { Pizza } from "../Pizzes/Pizza";
import { NYStyleCheesePizza } from '../Pizzes/NYStyleCheesePizza';


export class NYStylePizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza;
        switch (type) {
            case "cheese": {
                return pizza = new NYStyleCheesePizza();
            }
            case "greek": {
                return pizza = new NYStyleGreekPizza();
            }
            default: {
                return pizza = new NYStyleCheesePizza();
            }
        }
    }
}