import React from 'react';

const CenterServices = props => {
    
    const services = props.services;

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
                        {
                            services.map(service => 
                                <span className="service-tag" key={service}>{service}</span>
                            )
                        }
                    </div>
                    {/* Services Conent End */}
            </div>
        </React.Fragment>
    );
    
};
 
export default CenterServices;