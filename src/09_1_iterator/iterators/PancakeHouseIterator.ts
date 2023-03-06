import { MenuItem } from './../MenuItem';
import { IIterator } from './types';
export class PancakeHouseIterator implements IIterator {
    menuItems: MenuItem[];
    position = 0;

    constructor(items: MenuItem[]) {
        this.menuItems = items;
    }

    hasNext() {
        if (this.position >= this.menuItems.length || !this.menuItems[this.position]) {
            return false;
        }

        return true;
    }

    next() {
        let item = this.menuItems[this.position];
        this.position += 1;
        return item;
    }
}