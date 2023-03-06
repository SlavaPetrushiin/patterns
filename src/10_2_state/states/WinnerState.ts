import { IState } from "..";
import { GumballMachine } from "../GumballMachine";

export class WinnerState implements IState {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter() {
        console.log("Please wait, we’re already giving you a gumball");
    }

    public ejectQuarter() {
        console.log("Sorry, you already turned the crank");
    }

    public turnCrank() {
        console.log("Turning twice doesn’t get you another gumball!");
    }

    public dispense() {
        this.gumballMachine.releaseBall();

        if (this.gumballMachine.getCount() == 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        } else {
            this.gumballMachine.releaseBall();
            console.log("YOU’RE A WINNER! You got two gumballs for your quarter");

            if (this.gumballMachine.getCount() > 0) {
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            } else {
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    }
}