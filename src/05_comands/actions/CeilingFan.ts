export class CeilingFan {
    static HIGH = 3;
    static MEDIUM = 2;
    static LOW = 1;
    static OFF = 0;

    speed: number;
    space: string;

    constructor(space: string) {
        this.speed = CeilingFan.OFF;
        this.space = space;
    }

    high() {
        this.speed = CeilingFan.HIGH;
        console.log("Ceiling high," + " sped: " + this.speed + ", in " + this.space);
    }
    medium() {
        this.speed = CeilingFan.MEDIUM;
        console.log("Ceiling medium," + " sped: " + this.speed + ", in " + this.space);
    }
    low() {
        this.speed = CeilingFan.LOW;
        console.log("Ceiling low," + " sped: " + this.speed + ", in " + this.space);
    }
    off() {
        this.speed = CeilingFan.OFF;
        console.log("Ceiling off," + " sped: " + this.speed + ", in " + this.space);
    }

    getSpeed() {
        return this.speed;
    }
}