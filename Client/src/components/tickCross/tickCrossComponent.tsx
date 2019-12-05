import React                          from 'react';
import CancelIcon                     from '@material-ui/icons/Cancel';
import CheckCircleOutlineIcon         from '@material-ui/icons/CheckCircleOutline';

interface ITickCrossProperties {
  value : Boolean
}

const TickCrossComponent: React.FC<ITickCrossProperties> = (props) => {
  return (
    <div >
        {props.value ? <CheckCircleOutlineIcon color="primary"/> : <CancelIcon color="error"/>}
    </div>
  );
}

export default TickCrossComponent;