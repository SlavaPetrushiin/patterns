import { IIterator } from './iterators/types';
import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';

export class Waiter {
    pancakeHouseMenu: PancakeHouseMenu;
    dinerMenu: DinerMenu;

    constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
    }

    printMenu() {
        let dinerMenuItems = this.dinerMenu.createIterator();
        let pancakeHouseMenu = this.pancakeHouseMenu.createIterator();

        this.iterateMenu(dinerMenuItems);
        this.iterateMenu(pancakeHouseMenu);
    }

    iterateMenu(iterator: IIterator) {
        while (iterator.hasNext()) {
            let menuItem = iterator.next();
            console.log(menuItem.getName());
            console.log(menuItem.getDescription());
            console.log(menuItem.getPrice());
            console.log("********** - **********");
        }
    }




    printBreakfastMenu() {

    }

    printLunchMenu() {

    }

    printVegetarianMenu() {

    }

    isItemVegetarian(name: string) {

    }
}