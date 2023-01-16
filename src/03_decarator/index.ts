import { Soy } from './condimentsDecorator/Soy';
import { Mocha } from './condimentsDecorator/Mocha';
import { DarkRoast } from './drinks/DarkRoast';
import { Expresso } from './drinks/Expresso';
import { Whip } from './condimentsDecorator/Whip';

export const DECARATOR = () => {
    let expresso = new Expresso();
    console.log(expresso.getDescription() + " = " + expresso.cost());

    let darkRoast = new DarkRoast();
    darkRoast.setSize("VENTI")
    darkRoast = new Mocha(darkRoast);
    darkRoast = new Soy(darkRoast);
    darkRoast = new Whip(darkRoast)
    console.log(darkRoast.getDescription() + " = " + darkRoast.cost());
}