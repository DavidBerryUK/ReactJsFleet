import React                                    from 'react';
import { Dispatch }                             from 'react';
import { Reducer }                              from 'react';

interface Actions {
    type: string;
    value?: any;
}

interface SidebarProps {
    isLoggedIn: boolean,
    username: string,
    error: string,
    sampleCounter: number
}

interface InitContextProps {
    state: SidebarProps;
    dispatch: Dispatch<Actions>;
}

const initialState: SidebarProps = {
    isLoggedIn: false,
    username: "",
    error: "",
    sampleCounter: 5000

};

const reducer: Reducer<SidebarProps, Actions> = (state, action) => {
    console.log("reducer")
    switch (action.type) {
        case 'add':
            return {
                ...state,
                sampleCounter: state.sampleCounter + 1
            };

        case 'subtract':
            return {
                ...state,
                sampleCounter: state.sampleCounter - 1
            };

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