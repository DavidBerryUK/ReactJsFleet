import { Box }                                  from '@material-ui/core';
import { Button }                               from '@material-ui/core';
import { Grid }                                 from '@material-ui/core';
import { IUserModel }                           from './IUserModel';
import { IValidationContextActions }            from '../../../services/validation/context/interfaces/IValidationContextActions';
import { IValidationContextState }              from '../../../services/validation/context/interfaces/IValidationContextState';
import { RouteComponentProps }                  from 'react-router';
import { useHistory }                           from 'react-router';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import { ValidationContext }                    from '../../../services/validation/context/context/ValidationContext';
import ApiBaseItemResponseModel                 from '../../../models/apiBase/ApiBaseItemResponseModel';
import React                                    from 'react';
import RepositoryUserItem                       from '../../../repository/user/RepositoryUserItem';
import RuleMandatory                            from '../../../services/validation/rules/ruleProcessors/RuleMandatory';
import RuleMaxLength                            from '../../../services/validation/rules/ruleProcessors/RuleMaxLength';
import TextSubHeaderControl                     from '../../controls/textSubHeaderControl/TextSubHeaderControl';
import UserModel                                from '../../../models/user/UserModel';
import ValidatedTextFieldControl                from '../../../services/validation/controls/textFieldControl/ValidatedTextFieldControl';
import ValidationDebugInfoControl               from '../../../services/validation/controls/debugInfoControl/ValidationDebugInfoControl';
import ValidationState                          from '../../../services/validation/context/state/ValidationState';
import WidgetContainerControl                   from '../../controls/widgetContainerControl/WidgetContainerControl';
import WidgetFooterControl                      from '../../controls/widgetFooterControl/WidgetFooterControl';

type PropsType = RouteComponentProps<{ userId: string }>;

const UserEditWidget: React.FC<PropsType> = (props) => {

    const [currentUser, setCurrentUser] = useState<UserModel>(new UserModel());
    var history = useHistory();

    useMemo(() => {
        console.log(props.match.params.userId);
        var userRepository = new RepositoryUserItem();
        userRepository.getUserById(Number(props.match.params.userId))
            .onSuccess((userData: ApiBaseItemResponseModel<UserModel>) => {
                setCurrentUser(userData.entity!);
            });
    }, [props]);

    function viewClickedEventHandler() {
        history.push(`/maintain-users/${currentUser.entityKey}/view`);
    }

    function saveClickedEventHandler() {
        console.log("Save");
    }

    return (
        <ValidationState>
            <ValidationContext.Consumer>
                {(context: IValidationContextState & IValidationContextActions<IUserModel>) => (
                    <>
                        <WidgetContainerControl title="Edit User">
                            <Grid container>
                                <TextSubHeaderControl label="Identity" />
                                <Grid container>
                                    <Grid item xs={3} >
                                        <ValidatedTextFieldControl
                                            name="forename"
                                            label="forename"
                                            required
                                            autoComplete="off"
                                            autoFocus
                                            value={currentUser.forename}
                                            rules={[new RuleMandatory(), new RuleMaxLength(40)]}
                                        />
                                    </Grid>
                                    <Grid item xs={3} >
                                        <ValidatedTextFieldControl
                                            name="surname"
                                            label="surname"
                                            value={currentUser.surname}
                                            rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <WidgetFooterControl>
                                <Box display="flex" justifyContent="flex-end">
                                    <Box>
                                        <Button variant="text" color="secondary" onClick={viewClickedEventHandler}>Cancel</Button>
                                    </Box>
                                    <Box ml={1}>
                                        <Button variant="text" color="primary" onClick={saveClickedEventHandler} disabled={!context.isFormValid}>Save</Button>
                                    </Box>
                                </Box>
                            </WidgetFooterControl>
                        </WidgetContainerControl>
                        <ValidationDebugInfoControl />
                    </>
                )}
            </ValidationContext.Consumer>

        </ValidationState>
    );
}

export default UserEditWidget;