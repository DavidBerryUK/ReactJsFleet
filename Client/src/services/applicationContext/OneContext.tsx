import { Dispatch }                             from 'react';
import { Reducer }                              from 'react';
import AuthenticationApplicationState           from '../../modelStates/AuthenticationApplicationState';
import React                                    from 'react';
import UserModel                                from '../../models/user/UserModel';

export enum EnumAction {
    SampleCounterAdd,
    SampleCounterSubtract,
    Login,
    Logout
}

export interface IDispatchObject {
    entityName: string;
}

interface Actions {
    type: EnumAction;
    value?: IDispatchObject;
}

interface ApplicationContexgtProps {
    userState : AuthenticationApplicationState,
    sampleCounter: number
}

interface InitContextProps {
    state: ApplicationContexgtProps;
    dispatch: Dispatch<Actions>;
}

const initialState: ApplicationContexgtProps = {
    userState : new AuthenticationApplicationState(),
    sampleCounter: 5000

};

const reducer: Reducer<ApplicationContexgtProps, Actions> = (state, action) => {
    
    switch (action.type) {

        case EnumAction.Login:
            console.log("OneContext:Action:Login");
            var userObject =  action.value as UserModel;
            var userStateLogIn = new AuthenticationApplicationState();
            userStateLogIn.loggedIn = true;
            userStateLogIn.user = userObject;
            console.log(userStateLogIn);
            return { ...state, userState: userStateLogIn };
            //return {...state,sampleCounter: state.sampleCounter + 1};

        case EnumAction.Logout:
            console.log("OneContext:Action:Logout");
            var userStateLogout = new AuthenticationApplicationState();
            userStateLogout.loggedIn = false;
            return { ...state, userState: userStateLogout };

        case EnumAction.SampleCounterAdd:
            return {...state,sampleCounter: state.sampleCounter + 1};

        case EnumAction.SampleCounterSubtract:
            return {...state,sampleCounter: state.sampleCounter - 1};

        default:
            return state;
    }
};

let ContextOne = React.createContext({} as InitContextProps);


export function ContextOneProvider(props: any) {

    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };


    return (
        <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
    );
}



export const ContextOneConsumer = ContextOne.Consumer;
export default ContextOne

console.log("Executed OneContext");