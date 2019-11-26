import React                                    from 'react';
import ApplicationContextModel                  from './models/ApplicationContextModel';
import { IApplicationContextState } from './interfaces/IApplicationContextState';
import { IApplicationContextAction } from './interfaces/IApplicationContextAction';



export const ApplicationContext = React.createContext<IApplicationContextState & IApplicationContextAction>( new ApplicationContextModel(0) );
export const ApplicationContextProvider = ApplicationContext.Provider;
export const ApplicationContextConsumer = ApplicationContext.Consumer;
