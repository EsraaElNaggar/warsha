import React from 'react';

import Ratings from './../../common/ratings';
import CenterCardAppointments from './center-card-appointments';

const CenterCard = props => {
   
    const {
        centerName, 
        // locations, 
        telephone, 
        // onLocationService, 
        // waitingTime,
        speciality,
        noOfVisitors,
        totalRating
    } = props.center;

    const openCenterProfile = ()=>
    {
        const center = props.center;
        props.openCenterProfile(center);
    }

    return ( 
        <React.Fragment>
            <div className="center-card d-flex justify-content-between b-radius-10 div-border">
                {/* Center Image Start */}
                <div className="center-details-img-container">
                    <img src="../../public/assets/mechanistic.jpg" alt="" className="center-details-img img-circle" />
                </div>
                {/* Center Image End */}
                <div className="center-card-info" style={{cursor: "pointer"}} onClick={openCenterProfile}>
                    {/* Center Name Start */}
                    <p className="center-name">Center <b>{centerName}</b></p>
                    {/* Center Name End */}

                    {/* Center speciality Start */}
                    <h6 className="center-speciality">
                        Speciality Of {speciality}
                    </h6>
                    {/* Center speciality End */}

                    {/* Center Ratings Start */}
                    <div className="center-ratings">
                        {/* Ratings */}
                        <Ratings
                            ratingValue={totalRating}
                        />

                        {/* No. Of Reviews Start */}
                        <p className="no-of-reviews m-0">
                        Overall Ratings From {noOfVisitors} Visitors
                        </p>
                        {/* No. Of Reviews End */}

                        {/* No. Of Reviews Start */}
                        <p className="center-card-addess m-0">
                        <i className="fas fa-map-marker-alt pr-2" />
                        Nasr City: Enozha
                        </p>
                        {/* No. Of Reviews End */}

                        {/* No. Of Reviews Start */}
                        <p className="center-card-phone m-0">
                        <i className="fas fa-phone-alt pr-2" />
                            {telephone} - Regular Call
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