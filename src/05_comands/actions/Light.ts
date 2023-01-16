export class Light {
    name: string;

    constructor(name: string) {
        this.name = name;
    }


    public on() {
        console.log("Light is On" + " " + this.name);
    }

    public off() {
        console.log("Light is Off" + " " + this.name);
    }
}