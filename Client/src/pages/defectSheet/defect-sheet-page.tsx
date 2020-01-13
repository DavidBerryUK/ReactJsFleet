import { classStyleDefinition }                 from './classStyleDefinition'
import CopyrightComponent                       from '../../components/copyrightComponent/CopyrightComponent';
import DashboardButton                          from '../../components/dashboardButton/dashboard-button-component';
import DefectSheetComponent                     from '../../components/defectSheet/defect-sheet-component'
import DemoPageTitle                            from '../../components/demoPageTitle/demoPageTitle-component';
import React                                    from 'react';

const DefectSheetPage: React.FC = () => {

  const classStyles = classStyleDefinition();

  return (
    <div className={classStyles.page}>
      <DashboardButton/>
      <DemoPageTitle title="Defect Sheet"/>
      <DefectSheetComponent></DefectSheetComponent>
      <CopyrightComponent></CopyrightComponent>
    </div>
  );  
}

export default DefectSheetPage;