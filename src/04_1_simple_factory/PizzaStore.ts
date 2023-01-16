import { Pizza } from './Pizzes/Pizza';
import { SimplePizzaFactory } from './SimplePizzaFactory';

export class PizzaStore {
    factory: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory;
    }

    public orderPizza(type: string): Pizza {
        let pizza: Pizza = this.factory.createPizza(type);

        pizza.prepera();
        pizza.bake();
        pizza.box();

        return pizza;
    }
}
