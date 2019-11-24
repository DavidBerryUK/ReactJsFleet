import { IApplicationContextModel}              from '../interfaces/IApplicationContextModel'
import { Component }                            from 'react'

export default class ApplicationContextModel  extends Component implements IApplicationContextModel {
  
    
    public sampleCounter: number = 100;
    public isLoggedIn: boolean = false;
    
    public setSampleCounter(deltaValue: number) : void {
           this.setState({sampleCounter : this.sampleCounter + deltaValue} );
    }
}