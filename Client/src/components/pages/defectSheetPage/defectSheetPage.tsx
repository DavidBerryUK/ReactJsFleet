import CopyrightControl                       from '../../controls/copyrightControl/CopyrightControl';
import DefectSheetWidget                     from '../../widgets/defectSheetWidget/defectSheetWidget'
import React                                    from 'react';

const DefectSheetPage: React.FC = () => {
  
  return (
    <>
      <DefectSheetWidget/>
      <CopyrightControl/>
    </>
  );  
}

export default DefectSheetPage;