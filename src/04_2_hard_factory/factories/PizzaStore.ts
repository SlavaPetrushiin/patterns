import { Pizza } from '../Pizzes/Pizza';

export abstract class PizzaStore {


    public orderPizza(type: string): Pizza {
        let pizza: Pizza = this.createPizza(type);

        pizza.prepera();
        pizza.bake();
        pizza.box();

        return pizza;
    }

    protected abstract createPizza(type: string): Pizza
}


