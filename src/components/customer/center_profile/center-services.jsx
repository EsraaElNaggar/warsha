import React from 'react';

const CenterServices = props => {
   
    return ( 
        <React.Fragment>
            <div className="center-services b-radius-10 div-border">
                    {/* Services Title Start */}
                    <div className="title-services-title">
                        <i className="fas fa-tools" />
                        <span className="services-title">
                            Center Services
                        </span>
                    </div>
                    {/* Services Title End */}

                    {/* Services Conent Start */}
                    <div className="services-conent">
                        {/* <span className="service-tag">Electrical</span>
                        <span className="service-tag">Mechanic</span>
                        <span className="service-tag">Stereo</span>
                        <span className="service-tag">Wheels</span>
                        <span className="service-tag">Doors</span>
                        <span className="service-tag">Bla Bla</span>
                        <span className="service-tag">Blaaaa</span> */}
                        {
                            props.services.map(service => 
                                <span className="service-tag">{service}</span>
                            )
                        }
                    </div>
                    {/* Services Conent End */}
            </div>
        </React.Fragment>
    );
    
};
 
export default CenterServices;