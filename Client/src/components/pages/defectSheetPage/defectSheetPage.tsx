import { classStyleDefinition }                 from './classStyleDefinition'
import CopyrightControl                       from '../../controls/copyrightControl/CopyrightControl';
import DefectSheetWidget                     from '../../widgets/defectSheetWidget/defectSheetWidget'
import React                                    from 'react';

const DefectSheetPage: React.FC = () => {

  const classStyles = classStyleDefinition();

  return (
    <div className={classStyles.page}>
      <DefectSheetWidget/>
      <CopyrightControl/>
    </div>
  );  
}

export default DefectSheetPage;