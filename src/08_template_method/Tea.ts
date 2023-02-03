import { CaffeineBeverage } from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
    brew() {
        console.log("Steeping the tea");
    }

    addCondiments() {
        console.log("Add Lemon");
    }
}