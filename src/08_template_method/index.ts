import { Coffee } from './Coffee';
import { Tea } from './Tea';

/*
    Шаблонный Метод задает «скелет» алгоритма  в методе, оставляя определение реализации некоторых шагов субклассам. 
    Субклассы могут переопределять некоторые  части алгоритма без изменения его структуры
*/

export const TEMPLATE_METHOD = () => {
    let tea = new Tea();
    let coffee = new Coffee();
    coffee.prepareRecipe()
}