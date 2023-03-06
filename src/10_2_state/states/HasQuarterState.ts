import { IState } from "..";
import { GumballMachine } from "../GumballMachine";

export class HasQuarterState implements IState {
    gumballMachine: GumballMachine;


    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter() {
        console.log("You can’t insert another quarter");
    }

    public ejectQuarter() {
        console.log("Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    public turnCrank() {
        console.log("Quarter returned");
        let winner = Math.ceil(Math.random() * 10);
        if (winner === 10 && this.gumballMachine.getCount() > 1) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }

    public dispense() {
        console.log("No gumball dispensed");
    }
}