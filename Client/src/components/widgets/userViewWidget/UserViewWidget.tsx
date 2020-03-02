import { Box }                                  from '@material-ui/core';
import { Button }                               from '@material-ui/core';
import { Grid }                                 from '@material-ui/core';
import { RouteComponentProps }                  from 'react-router';
import { useHistory }                           from 'react-router';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import ApiBaseItemResponseModel                 from '../../../models/apiBase/ApiBaseItemResponseModel';
import React                                    from 'react';
import ReadOnlyTextControl                      from '../../controls/readOnlyTextControl/ReadOnlyTextControl';
import RepositoryUserItem                       from '../../../repository/user/RepositoryUserItem';
import TextSubHeaderControl                     from '../../controls/textSubHeaderControl/TextSubHeaderControl';
import UserModel                                from '../../../models/user/UserModel';
import WidgetContainerControl                   from '../../controls/widgetContainerControl/WidgetContainerControl';
import WidgetFooterControl                      from '../../controls/widgetFooterControl/WidgetFooterControl';

type PropsType = RouteComponentProps<{ userId: string }>;

const UserViewWidget: React.FC<PropsType> = (props) => {

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

    function editClickedEventHandler() {
        history.push(`/maintain-users/${currentUser.entityKey}/edit`);
    }

    return (
        <WidgetContainerControl title="View User">
            <Grid container>
                <TextSubHeaderControl label="Identity" />
                <Grid container>
                    <Grid item xs={3} >
                        <ReadOnlyTextControl
                            label="forename"
                            value={currentUser.forename}
                            maxWidth={150} />
                    </Grid>
                    <Grid item xs={3} >
                        <ReadOnlyTextControl
                            label="surname"
                            value={currentUser.surname}
                            maxWidth={150} />
                    </Grid>
                </Grid>
            </Grid>
            <WidgetFooterControl>
                <Box display="flex" justifyContent="flex-end">
                    <Button variant="text"  color="primary" onClick={editClickedEventHandler}>Edit</Button>
                </Box>
            </WidgetFooterControl>
        </WidgetContainerControl>
    );
}

export default UserViewWidget;
