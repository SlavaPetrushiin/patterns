import { IMenu } from './Menu';
import { MenuItem } from './MenuItem';
import { PancakeHouseIterator } from './iterators/PancakeHouseIterator';

export class PancakeHouseMenu implements IMenu {
    menuItems: MenuItem[] = [];

    constructor() {
        this.addItem(
            "K&B’s Pancake Breakfast",
            "Pancakes with scrambled eggs, and toast",
            15.22,
            true
        );
        this.addItem(
            "Regular Pancake Breakfast",
            "Pancakes with fried eggs, sausage",
            2.99,
            false
        );
        this.addItem(
            "Blueberry Pancakes",
            "Pancakes made with fresh blueberries",
            3.44,
            true
        );
        this.addItem(
            "Waffles",
            "Waffles, with your choice of blueberries or strawberries",
            3.59,
            true
        );
    }

    addItem(name: string, description: string, price: number, vegetarian: boolean) {
        let newMenuItem: MenuItem = new MenuItem(name, description, price, vegetarian);
        this.menuItems.push(newMenuItem);
    }

    // getMenuItems(): MenuItem[] {
    //     return this.menuItems;
    // }

    createIterator() {
        return new PancakeHouseIterator(this.menuItems);
    }
}