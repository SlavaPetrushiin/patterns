import { GumballMachine } from './../GumballMachine';
import { IState } from './../index';

export class NoQuarterState implements IState {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter() {
        console.log("You inserted a quarter");
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())
    }

    public ejectQuarter() {
        console.log("You haven’t inserted a quarter");
    }

    public turnCrank() {
        console.log("You turned but there’s no quarter");
    }

    public dispense() {
        console.log("You need to pay first");
    }
}