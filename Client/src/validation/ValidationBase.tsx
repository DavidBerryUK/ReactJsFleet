import { Component }                            from 'react'

export default class ValidationBase<P,T> extends Component<P,any> {
    
    context! : T;
}