import { classStyleDefinition }                 from './classStyleDefinition'
import CopyrightComponent                       from '../../components/controls/copyrightComponent/CopyrightComponent';
import DefectSheetComponent                     from '../../components/appWidget/defectSheet/defect-sheet-component'
import React                                    from 'react';

const DefectSheetPage: React.FC = () => {

  const classStyles = classStyleDefinition();

  return (
    <div className={classStyles.page}>
      <DefectSheetComponent></DefectSheetComponent>
      <CopyrightComponent></CopyrightComponent>
    </div>
  );  
}

export default DefectSheetPage;