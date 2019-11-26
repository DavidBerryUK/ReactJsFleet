import { Component }                            from "react";
import { IApplicationContextState }             from "../interfaces/IApplicationContextState";
import { IApplicationContextAction }            from "../interfaces/IApplicationContextAction";


export default class ApplicationContextModel extends Component<{}, IApplicationContextState> 
    implements IApplicationContextState, 
               IApplicationContextAction{

    get sampleCounter(): number {
        return this.state.sampleCounter;
    }
    
    get isLoggedIn(): boolean {        
        return this.state.isLoggedIn;
    }

    //
    // Strongly Typed Model
    //
    state : IApplicationContextState = {
        sampleCounter : 1000,
        isLoggedIn : false
    };


    //
    // Strongly Typed Actions
    //
    setSampleCounterDelta(value: number): void {
        var newState : IApplicationContextState = { sampleCounter: this.state.sampleCounter + value, isLoggedIn: this.state.isLoggedIn };
        this.setState(newState)
    }
    setSampleCounterValue(value: number): void {
        var newState : IApplicationContextState = { sampleCounter: value, isLoggedIn: this.state.isLoggedIn };
        this.setState(newState)
    }
    setLoggedOn(): void {
        var newState : IApplicationContextState = { sampleCounter: this.state.sampleCounter, isLoggedIn: true };
        this.setState(newState)
    }
    setLoggedOff(): void {
        var newState : IApplicationContextState = { sampleCounter: this.state.sampleCounter, isLoggedIn: false };
        this.setState(newState)
    }
}