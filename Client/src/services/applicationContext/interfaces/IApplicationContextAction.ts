export interface IApplicationContextAction {

    setSampleCounterDelta(value: number) : void;
    setSampleCounterValue(value: number) : void;
    setLoggedOn(): void;
    setLoggedOff(): void;
}