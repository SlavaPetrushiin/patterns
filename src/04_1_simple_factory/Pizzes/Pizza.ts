export abstract class Pizza {
    abstract name: string;

    public prepera() {
        console.log("Prepare: " + this.name);
    }

    public bake() {
        console.log("Bake: " + this.name);
    }

    public box() {
        console.log("Box: " + this.name);
    }
}