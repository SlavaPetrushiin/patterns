import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';
import { Waiter } from './Waiter';

export const ITERATOR = () => {
    const dinerMenuItems = new PancakeHouseMenu();
    const dinnerMenu = new DinerMenu();

    let waiter = new Waiter(dinerMenuItems, dinnerMenu);
    waiter.printMenu();
}