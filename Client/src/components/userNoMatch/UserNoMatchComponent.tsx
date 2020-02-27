import { RouteComponentProps }                  from 'react-router';
import React                                    from 'react';

type PropsType = RouteComponentProps<{ userId: string }>;

const UserNoMatchComponent : React.FC<PropsType> = (props) => {    

    return (
        <>
        <h4>No Match</h4>
        {props.location.pathname}
        </>
    );
}

export default UserNoMatchComponent;