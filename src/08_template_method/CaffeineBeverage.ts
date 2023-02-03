export abstract class CaffeineBeverage {
    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    abstract brew(): void;
    abstract addCondiments(): void;

    boilWater() {
        console.log("Boiling water");
    }

    pourInCup() {
        console.log("Pouring into cup");
    }

    customerWantsCondiments(): boolean {
        return true;
    }
}
