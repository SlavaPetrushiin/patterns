export class GumballMachine {
    static SOLD_OUT = 0;  //автомат пустой
    static NO_QUARTER = 1;  //не кинули монетку
    static HAS_QUARTER = 2; //кинули монетку
    static SOLD = 3; //продали шарик

    state: number = GumballMachine.SOLD_OUT;
    count: number = 0;

    constructor(count: number) {
        this.count = count;
        if (this.count > 0) {
            this.state = GumballMachine.NO_QUARTER;
        }
    }

    public insertQuarter() {
        if (this.state === GumballMachine.HAS_QUARTER) {
            console.log("You can’t insert another quarter");
        } else if (this.state === GumballMachine.NO_QUARTER) {
            this.state = GumballMachine.HAS_QUARTER;
            console.log("You inserted a quarter");
        } else if (this.state == GumballMachine.SOLD_OUT) {
            console.log("You can’t insert a quarter, the machine is sold out");
        } else if (this.state == GumballMachine.SOLD) {
            console.log("Please wait, we’re already giving you a gumball");
        }
    }

    public ejectQuarter() {
        if (this.state === GumballMachine.HAS_QUARTER) {
            console.log("Quarter returned");
            this.state = GumballMachine.NO_QUARTER;
        } else if (this.state === GumballMachine.NO_QUARTER) {
            console.log("You haven’t inserted a quarter");
        } else if (this.state === GumballMachine.SOLD) {
            console.log("GumballMachine");
        } else if (this.state === GumballMachine.SOLD_OUT) {
            console.log("You can’t eject, you haven’t inserted a quarter yet");
        }
    }

    public turnCrank() {
        if (this.state === GumballMachine.SOLD) {
            console.log("Turning twice doesn’t get you another gumball!");
        } else if (this.state === GumballMachine.NO_QUARTER) {
            console.log("You turned but there’s no quarter");
        } else if (this.state === GumballMachine.SOLD_OUT) {
            console.log("You turned, but there are no gumballs");
        } else if (this.state === GumballMachine.HAS_QUARTER) {
            console.log("You turned...");
            this.state = GumballMachine.SOLD;
            this.dispense();
        }
    }

    public dispense() {
        if (this.state === GumballMachine.SOLD) {
            console.log("A gumball comes rolling out the slot");
            this.count = this.count - 1;

            if (this.count > 0) {
                this.state = GumballMachine.NO_QUARTER;
            } else {
                console.log("Oops, out of gumballs!");
                this.state = GumballMachine.SOLD_OUT;
            }
        } else if (this.state === GumballMachine.NO_QUARTER) {
            console.log("You need to pay first");
        } else if (this.state === GumballMachine.SOLD_OUT) {
            console.log("No gumball dispensed");
        } else if (this.state === GumballMachine.HAS_QUARTER) {
            console.log("No gumball dispensed");
        }
    }

    public getCurrentState() {
        return this.state;
    }
}