import CopyrightControl                         from '../../controls/copyrightControl/CopyrightControl';
import FleetListWidget                          from '../../widgets/fleetListWidget/fleetListWidget'
import React                                    from 'react';

const FleetListPage: React.FC = () => {

  return (    
     <>
      <FleetListWidget></FleetListWidget>    
      <CopyrightControl/>
      </>
  );
}

export default FleetListPage;