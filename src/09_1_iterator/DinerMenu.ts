import { IMenu } from './Menu';
import { MenuItem } from './MenuItem';
import { DinerMenuIterator } from './iterators/DinerMenuIterator';


export class DinerMenu implements IMenu {
    menuItems: Set<MenuItem> = new Set<MenuItem>();
    max_items = 6;

    constructor() {
        this.addItem(
            "Vegetarian BLT",
            "(Fakin’) Bacon with lettuce & tomato on whole wheat",
            2.00,
            true
        );
        this.addItem(
            "BLT",
            "Bacon with lettuce & tomato on whole wheat",
            5.99,
            false
        );
    }

    addItem(name: string, description: string, price: number, vegetarian: boolean) {
        if (this.menuItems.size >= this.max_items) {
            throw new Error("Sorry, menu is full! Can’t add item to menu");
        } else {
            let newMenuItem = new MenuItem(name, description, price, vegetarian);
            this.menuItems.add(newMenuItem);
        }
    }

    // getMenuItems(): Set<MenuItem> {
    //     return this.menuItems;
    // }

    createIterator() {
        return new DinerMenuIterator(this.menuItems);
    }
}