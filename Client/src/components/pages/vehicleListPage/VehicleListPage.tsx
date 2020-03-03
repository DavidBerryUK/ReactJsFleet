import CopyrightControl                         from '../../controls/copyrightControl/CopyrightControl';
import React                                    from 'react';
import VehicleListWidget                        from '../../widgets/vehicleListWidget/VehicleListWidget'

const VehicleListPage: React.FC = () => {

  return (    
     <>
      <VehicleListWidget/>
      <CopyrightControl/>
      </>
  );
}

export default VehicleListPage;