import { MenuItem } from './../MenuItem';

export interface IIterator {
    hasNext: () => boolean;
    next: () => MenuItem;
}