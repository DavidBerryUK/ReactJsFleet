
import { classStyleDefinition }                 from './classStyleDefinition';
import React                                    from 'react';

interface IProperties {

}

const WidgetFooterControl: React.FC<IProperties> = (props) => {

  const classStyles = classStyleDefinition();

  return (
    <div className={classStyles.footer}>

        {props.children}

    </div>
  );
}

export default WidgetFooterControl;