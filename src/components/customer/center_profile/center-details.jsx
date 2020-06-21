import React from 'react';

import CenterAbout from './center-about';
import CenterServices from './center-services';
import CenterBasicDetails from './center-basic-details';

const CenterDetails = props => {
   
    return ( 
        <React.Fragment>
            <div className="center-details">                
                {/* Center Basic Details */}
                <CenterBasicDetails/> {/*  send basic info */}

                {/* Center About */}
                <CenterAbout/>   {/*  send about content */}

                {/* Center Services */}
                <CenterServices/>  {/*  send services array */}

                {/* Remember to add reviews here */}
            </div>
        </React.Fragment>
    );
    
};
 
export default CenterDetails;