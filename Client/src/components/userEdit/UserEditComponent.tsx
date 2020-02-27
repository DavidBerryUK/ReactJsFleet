import React                                    from 'react';
import { RouteComponentProps }                  from 'react-router';

type PropsType = RouteComponentProps<{ userId: string }>;

const UserEditComponent : React.FC<PropsType> = (props) => {    

    return (
        <h4>User Edit: ID:{props.match.params.userId}</h4>
    );
}

export default UserEditComponent;