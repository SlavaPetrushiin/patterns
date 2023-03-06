import { GumballMachine } from './GumballMachine';

export const STATE_PATTERN = () => {

    const gumballMachine = new GumballMachine(5);

    console.log("Current state: ", gumballMachine.getCurrentState());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log("Current state: ", gumballMachine.getCurrentState());

    gumballMachine.insertQuarter();
    gumballMachine.ejectQuarter();
    gumballMachine.turnCrank();

    console.log("Current state: ", gumballMachine.getCurrentState());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log("Current state: ", gumballMachine.getCurrentState());

    gumballMachine.insertQuarter();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log("Current state: ", gumballMachine.getCurrentState());
}