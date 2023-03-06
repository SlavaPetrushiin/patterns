import { MenuItem } from './MenuItem';
import { Menu } from './Menu';
import { Waitress } from './Waitress';

export const ITERATOR_2 = () => {

    let pancakeHouseMenu = new Menu("PANCAKE HOUSE MENU", "Breakfast");
    let dinerMenu = new Menu("DINER MENU", "Lunch");
    let cafeMenu = new Menu("CAFE MENU", "Dinner");

    let allMenus = new Menu("ALL MENUS", "All menus combined");

    allMenus.add(pancakeHouseMenu);
    allMenus.add(dinerMenu);
    allMenus.add(cafeMenu);

    pancakeHouseMenu.add(new MenuItem(
        "K&B’s Pancake Breakfast",
        "Pancakes with scrambled eggs, and toast",
        15.22,
        true
    ));
    pancakeHouseMenu.add(new MenuItem(
        "Regular Pancake Breakfast",
        "Pancakes with fried eggs, sausage",
        2.99,
        false
    ));
    pancakeHouseMenu.add(new MenuItem(
        "Blueberry Pancakes",
        "Pancakes made with fresh blueberries",
        3.44,
        true
    ));
    pancakeHouseMenu.add(new MenuItem(
        "Waffles",
        "Waffles, with your choice of blueberries or strawberries",
        3.59,
        true
    ));

    dinerMenu.add(new MenuItem(
        "Pasta",
        "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
        3.89,
        true,
    ))
    dinerMenu.add(new MenuItem(
        "Apple Pie",
        "Apple pie with a flakey crust, topped with vanilla icecream",
        3.00,
        true,
    ))


    cafeMenu.add(new MenuItem(
        "Orahge Pie",
        "Apple pie with a flakey crust, topped with vanilla icecream",
        1.00,
        true,
    ))

    let waitress = new Waitress(allMenus);

    waitress.printMenu();
}