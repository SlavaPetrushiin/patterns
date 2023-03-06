import { IIterator } from './iterators/types';

export interface IMenu {
    createIterator: () => IIterator
}