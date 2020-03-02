import React                                    from 'react';
import CancelIcon                               from '@material-ui/icons/Cancel';
import CheckCircleOutlineIcon                   from '@material-ui/icons/CheckCircleOutline';

interface ITickCrossProperties {
  value : Boolean
}

const TickCrossControl: React.FC<ITickCrossProperties> = (props) => {
  return (
    <>
        {props.value ? <CheckCircleOutlineIcon color="primary"/> : <CancelIcon color="error"/>}
    </>
  );
}

export default TickCrossControl;