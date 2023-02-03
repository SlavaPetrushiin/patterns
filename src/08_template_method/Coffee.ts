import { CaffeineBeverage } from "./CaffeineBeverage";


export class Coffee extends CaffeineBeverage {
    brew() {
        console.log("Dripping Coffee through  filter");
    }

    addCondiments() {
        console.log("Add sugar and milk");
    }

    customerWantsCondiments() {
        let answer = this.getUserInput();
        if (answer.toLowerCase() == 'y') {
            return true
        } else {
            return false;
        }
    }

    getUserInput(): string {
        return "y"
    }

}