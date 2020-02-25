import { Dispatch }                             from 'react';
import { Reducer }                              from 'react';
import AuthenticationApplicationState           from '../../modelStates/AuthenticationApplicationState';
import FleetListFilterModel                     from '../../components/fleetList/fleetListFilterModel';
import React                                    from 'react';
import UserModel                                from '../../models/user/UserModel';

export enum EnumAction {
    SampleCounterAdd,
    SampleCounterSubtract,
    Login,
    Logout,
    UpdateFleetListFilter
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
    fleetListFilter : FleetListFilterModel,
    sampleCounter: number
}

interface InitContextProps {
    state: ApplicationContexgtProps;
    dispatch: Dispatch<Actions>;
}

const initialState: ApplicationContexgtProps = {
    userState : new AuthenticationApplicationState(),
    fleetListFilter: new FleetListFilterModel(),
    sampleCounter: 5000

};

const reducer: Reducer<ApplicationContexgtProps, Actions> = (state, action) => {
    
    switch (action.type) {

        case EnumAction.UpdateFleetListFilter:
            console.log("UpdateFleetListFilter");
            var fleetListFilterObject =  action.value as FleetListFilterModel;                        
            return { ...state, fleetListFilter: fleetListFilterObject };

        case EnumAction.Login:
            console.log("OneContext:Action:Login");
            var userObject =  action.value as UserModel;
            var userStateLogIn = new AuthenticationApplicationState();
            userStateLogIn.loggedIn = true;
            userStateLogIn.user = userObject;
            console.log(userStateLogIn);
            return { ...state, userState: userStateLogIn };            

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

let ApplicationContext = React.createContext({} as InitContextProps);

export function ApplicationContextProvider(props: any) {

    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };

    return (
        <ApplicationContext.Provider value={value}>{props.children}</ApplicationContext.Provider>
    );
}

export const ApplicationContextConsumer = ApplicationContext.Consumer;
export default ApplicationContext

console.log("Executed OneContext");