import React from 'react';

import CenterAbout from './center-about';
import CenterServices from './center-services';
import CenterBasicDetails from './center-basic-details';

const CenterDetails = props => {
   
    const center = props.center;

    return ( 
        <React.Fragment>
            <div className="center-details">                
                {/* Center Basic Details */}
                <CenterBasicDetails
                    center={center}
                />

                {/* Center About */}
                <CenterAbout
                    // about={center.about}
                />

                {/* Center Services */}
                {
                    center.services.length !== 0 &&
                    <CenterServices
                        services={center.services}
                    />
                }
                
                {/* Remember to add reviews here */}
            </div>
        </React.Fragment>
    );
    
};
 
export default CenterDetails;