export abstract class Pizza {
    abstract name: string;
    abstract dough: string;
    abstract sauce: string;
    toppings: string[] = [];

    public prepera() {
        console.log("Prepare: " + this.name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");

        for (let i = 0; i < this.toppings.length; i++) {
            console.log(`- ${this.toppings[i]}`);
        }
    }

    public bake(): void {
        console.log("“Bake for 25 minutes at 350");
    }

    public cut(): void {
        console.log("Cutting the pizza into diagonal slices");
    }

    public box(): void {
        console.log("Place pizza in official PizzaStore box");
    }

    public getName(): string {
        return this.name;
    }
}