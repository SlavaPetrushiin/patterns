import { PizzaStore } from "./PizzaStore";
import { SimplePizzaFactory } from './SimplePizzaFactory';

export const SIMPLE_FACTORY = () => {
    const simplePizzaFactory = new SimplePizzaFactory();

    const slStore = new PizzaStore(simplePizzaFactory);

    const orderPepperoniPizza = slStore.orderPizza("pepperoni");
    const orderGreekPizza = slStore.orderPizza("greek");
}