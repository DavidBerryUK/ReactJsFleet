import { classStyleDefinition }                 from './classStyleDefinition'
import CopyrightComponent                       from '../../components/copyrightComponent/CopyrightComponent';
import DefectSheetComponent                     from '../../components/defectSheet/defect-sheet-component'
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