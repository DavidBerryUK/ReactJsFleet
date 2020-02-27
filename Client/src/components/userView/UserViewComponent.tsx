import { RouteComponentProps }                  from 'react-router';
import React                                    from 'react';

type PropsType = RouteComponentProps<{ userId: string }>;

const UserViewComponent : React.FC<PropsType> = (props) => {

    return (
        <h4>User View: ID:{props.match.params.userId}</h4>
    );
}

export default UserViewComponent;