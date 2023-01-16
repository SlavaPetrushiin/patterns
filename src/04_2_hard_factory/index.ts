import { NYStylePizzaStore } from './factories/NYStylePizzaStore';

// Паттерн Фабричный Метод определяет интерфейс создания 
// объекта, но позволяет субклассам выбрать класс создаваемого экземпляра. Таким образом, Фабричный Метод делегирует 
// операцию создания экземпляра субклассам.


export const HARD_FACTORY = () => {
    const nyPizzaStore = new NYStylePizzaStore();
    const pizza = nyPizzaStore.orderPizza("chesse");

    //const nyFactory = new NYPizzaFactory();
    //const nyStore = new PizzaStore(nyFactory);

    //const chicagoFactory = new ChicagoPizzaFactory();
    //const chicago = new PizzaStore(chicagoFactory);

    //const californiaFactory = new CaliforniaPizzaFactory();
    //const californiaStore = new PizzaStore(californiaFactory);

    // const orderPepperoniPizza = slStore.orderPizza("pepperoni");
    // const orderGreekPizza = slStore.orderPizza("greek");
}




