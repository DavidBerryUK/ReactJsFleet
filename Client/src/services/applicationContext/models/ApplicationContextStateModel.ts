import { IApplicationContextState }             from './../interfaces/IApplicationContextState';

export default class ApplicationContextStateModel implements IApplicationContextState {

    isLoggedIn: boolean;    
    sampleCounter: number;

    constructor() {
        this.isLoggedIn = false;
        this.sampleCounter = 1000;
    }

    clone() : ApplicationContextStateModel {
        var copy = Object.assign(new ApplicationContextStateModel(), this);
        return copy;
    }
}