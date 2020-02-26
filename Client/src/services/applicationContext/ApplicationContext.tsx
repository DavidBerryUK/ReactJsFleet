import { Dispatch }                             from 'react';
import { Reducer }                              from 'react';
import AuthenticationApplicationState           from '../../modelStates/AuthenticationApplicationState';
import FleetListFilterModel                     from '../../components/fleetList/fleetListFilterModel';
import React                                    from 'react';
import TokenCookies                             from '../../utilities/cookies/TokenCookies';
import UserModel                                from '../../models/user/UserModel';

export enum EnumAction {
    Login,
    Logout,
    SampleCounterAdd,
    SampleCounterSubtract,
    SetToken,
    UpdateFleetListFilter
}

export interface IDispatchObject {
    entityName: string;
}

interface Actions {
    type: EnumAction;
    value?: IDispatchObject | string;
}

interface ApplicationContexgtProps {
    userState : AuthenticationApplicationState,
    fleetListFilter : FleetListFilterModel,
    sampleCounter: number,
    token?: string | undefined
}

interface InitContextProps {
    state: ApplicationContexgtProps;
    dispatch: Dispatch<Actions>;
}

const initialState: ApplicationContexgtProps = {
    userState : new AuthenticationApplicationState(),
    fleetListFilter: new FleetListFilterModel(),
    sampleCounter: 5000,
    token: undefined

};

const reducer: Reducer<ApplicationContexgtProps, Actions> = (state, action) => {
    
    switch (action.type) {

        case EnumAction.UpdateFleetListFilter:            
            var fleetListFilterObject =  action.value as FleetListFilterModel;                        
            return { ...state, fleetListFilter: fleetListFilterObject };

        case EnumAction.Login:            
            var userObject =  action.value as UserModel;
            var userStateLogIn = new AuthenticationApplicationState();
            userStateLogIn.loggedIn = true;
            userStateLogIn.user = userObject;
            console.log(userStateLogIn);
            return { ...state, userState: userStateLogIn };            

        case EnumAction.Logout:            
            var userStateLogout = new AuthenticationApplicationState();
            userStateLogout.loggedIn = false;
            var tokenLogoutCookies = new TokenCookies();
            tokenLogoutCookies.delete();
            return { ...state, 
                userState: userStateLogout ,
                token: undefined,
            };

        case EnumAction.SampleCounterAdd:
            return {...state,sampleCounter: state.sampleCounter + 1};

        case EnumAction.SampleCounterSubtract:
            return {...state,sampleCounter: state.sampleCounter - 1};

        case EnumAction.SetToken:            
            // store token in cookie incase user refreshes screen
            var tokenLoginCookies = new TokenCookies();
            tokenLoginCookies.token = action.value as string;          
            return {...state,token:action.value as string};

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