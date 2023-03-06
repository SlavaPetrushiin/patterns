import { WinnerState } from './states/WinnerState';
import { SoldState } from './states/SoldState';
import { HasQuarterState } from './states/HasQuarterState';
import { SoldOutState } from './states/SoldOutState';
import { NoQuarterState } from './states/NoQuarterState';
import { IState } from './index';

export class GumballMachine {
    public soldOutState: IState;
    public noQuarterState: IState;
    public hasQuarterState: IState;
    public soldState: IState;
    public winnerState: IState;

    state: IState;
    count: number = 0;

    constructor(numberGumballs: number) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);

        this.count = numberGumballs;

        if (this.count > 0) {
            this.state = this.noQuarterState;
        } else {
            this.state = this.soldOutState;
        }
    }

    public insertQuarter() {
        this.state.insertQuarter();
    }

    public ejectQuarter() {
        this.state.ejectQuarter();
    }

    public turnCrank() {
        this.state.turnCrank();
        this.state.dispense();
    }

    public setState(state: IState) {
        this.state = state;
    }

    public releaseBall() {
        console.log("A gumball comes rolling out the slot...");
        if (this.count != 0) {
            this.count = this.count - 1;
        }
    }

    public getNoQuarterState() {
        return this.noQuarterState;
    }

    public getHasQuarterState() {
        return this.hasQuarterState;
    }

    public getSoldOutState() {
        return this.soldOutState;
    }

    public getSoldState() {
        return this.soldState;
    }

    public getWinnerState() {
        return this.winnerState;
    }

    public getCount() {
        return this.count;
    }
}