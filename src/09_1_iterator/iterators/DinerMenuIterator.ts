import { MenuItem } from './../MenuItem';
import { IIterator } from './types';

export class DinerMenuIterator implements IIterator {
    menuItems: Set<MenuItem>;
    position = 0;
    iterator: IterableIterator<MenuItem>;

    constructor(menuItems: Set<MenuItem>) {
        this.menuItems = menuItems as Set<MenuItem>;
        this.iterator = this.menuItems.values();
    }

    hasNext() {
        if (this.position >= this.menuItems.size) {
            return false;
        }

        return true;
    };

    next() {
        let menuItem = this.iterator.next().value;
        this.position += 1;
        return menuItem;
    }
}