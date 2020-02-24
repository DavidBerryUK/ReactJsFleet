import { IApplicationContextAction }            from './interfaces/IApplicationContextAction';
import { IApplicationContextState }             from './interfaces/IApplicationContextState';
import ApplicationContextModel                  from './models/ApplicationContextModel';
import ApplicationContextStateModel             from './models/ApplicationContextStateModel';
import React                                    from 'react';


export const ApplicationContext = React.createContext<IApplicationContextState & IApplicationContextAction>( new ApplicationContextModel( new ApplicationContextStateModel()) );

