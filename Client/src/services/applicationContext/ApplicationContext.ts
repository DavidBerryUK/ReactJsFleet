import { IApplicationContextModel }             from './interfaces/IApplicationContextModel'
import ApplicationContextModel                  from './models/ApplicationContextModel';
import React                                    from 'react';

export const ApplicationContextModelInstance = new ApplicationContextModel(0);
export const ApplicationContext = React.createContext<IApplicationContextModel>(ApplicationContextModelInstance);
export const ApplicationContextProvider = ApplicationContext.Provider;
export const ApplicationContextConsumer = ApplicationContext.Consumer;
