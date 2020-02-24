import { Component }                            from "react";
import { IApplicationContextState }             from "../interfaces/IApplicationContextState";
import { IApplicationContextAction }            from "../interfaces/IApplicationContextAction";
import ApplicationContextStateModel             from "./ApplicationContextStateModel";


export default class ApplicationContextModel extends Component<{}, IApplicationContextState>

    implements IApplicationContextState,
    IApplicationContextAction {

    //
    // Strongly Typed Model
    //
    state: ApplicationContextStateModel = new ApplicationContextStateModel();


    //
    // getters
    //
    get sampleCounter(): number {
        return this.state.sampleCounter;
    }

    get isLoggedIn(): boolean {
        return this.state.isLoggedIn;
    }

    //
    // Strongly Typed Actions
    //
    setSampleCounterDelta(value: number): void {
        console.log(`setSampleCounterDelta:Begins with value ${value}`);
        console.log("setSampleCounterDelta:clone state");
        var newState = this.state.clone();
        console.log(`Current Value of Count = ${newState.sampleCounter}`);
        console.log("setSampleCounterDelta:update model");
        newState.sampleCounter = newState.sampleCounter + value;
        console.log(`New Value of Count = ${newState.sampleCounter}`);
        console.log("setSampleCounterDelta:submit new state");
        this.setState(newState)
        console.log(`setSampleCounterDelta-Finished`);
    }
    setSampleCounterValue(value: number): void {
        var newState = this.state.clone();
        newState.sampleCounter = value;
        this.setState(newState)
    }
    setLoggedOn(): void {
        var newState = this.state.clone();
        newState.isLoggedIn = true;
        this.setState(newState)
    }
    setLoggedOff(): void {
        var newState = this.state.clone();
        newState.isLoggedIn = false;
        this.setState(newState)
    }

}