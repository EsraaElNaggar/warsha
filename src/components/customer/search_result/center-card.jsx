import React from 'react';

import Ratings from './../../common/ratings';
import CenterCardAppointments from './center-card-appointments';

const CenterCard = props => {
   
    return ( 
        <React.Fragment>
            <div className="center-card d-flex justify-content-between b-radius-10 div-border">
                {/* Center Image Start */}
                <div className="center-details-img-container">
                    <img src="../../public/assets/mechanistic.jpg" alt="" className="center-details-img img-circle" />
                </div>
                {/* Center Image End */}
                <div className="center-card-info">
                    {/* Center Name Start */}
                    <p className="center-name">Center <b>Eng Salah Ahmed</b></p>
                    {/* Center Name End */}

                    {/* Center speciality Start */}
                    <h6 className="center-speciality">
                        Speciality Of Electricity &amp; Mechanic
                    </h6>
                    {/* Center speciality End */}

                    {/* Center Ratings Start */}
                    <div className="center-ratings">
                        {/* Ratings */}
                        <Ratings/>

                        {/* No. Of Reviews Start */}
                        <p className="no-of-reviews m-0">
                        Overall Ratings From 255 Visitors
                        </p>
                        {/* No. Of Reviews End */}

                        {/* No. Of Reviews Start */}
                        <p className="center-card-addess m-0">
                        <i className="fas fa-map-marker-alt" />
                        Nasr City: Enozha
                        </p>
                        {/* No. Of Reviews End */}

                        {/* No. Of Reviews Start */}
                        <p className="center-card-phone m-0">
                        <i className="fas fa-phone-alt" />
                        16697 - Regular Call
                        </p>
                        {/* No. Of Reviews End */}
                    </div>
                    {/* Center Ratings Start */}
                </div>

                {/* Center Card Apointments */}
                <CenterCardAppointments/>
            </div>
        </React.Fragment>
    );
    
};
 
export default CenterCard;