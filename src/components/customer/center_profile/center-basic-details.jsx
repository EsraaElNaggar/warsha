import React from 'react';
import Ratings from '../../common/ratings';

const CenterBasicDetails = props => {
   
    return ( 
        <React.Fragment>
            <div className="center-basic-details d-flex justify-content-around b-radius-10 div-border">
                {/* Center Image Start */}
                <div className="center-details-img-container">
                    <img src="../../public/assets/mechanistic.jpg" alt="" className="center-details-img img-circle" />
                </div>
                {/* Center Image End */}

                <div className="center-basic-info">
                    <span className="d-flex justify-content-between mb-3">
                        {/* Center Name Start */}
                        <span className="center-basic-name">
                            Center Bla Bla
                        </span>
                        {/* Center Name End*/}

                        {/* No. Of Views Start */}
                        <span className="no-of-views">
                            279 View(s)
                        </span>
                        {/* No. Of Views End */}
                    </span>

                    {/* Center speciality Start */}
                    <h6 className="center-speciality">
                        Speciality Of Electricity &amp; Mechanic
                    </h6>
                    {/* Center speciality End */}

                    {/* Center Ratings Start */}
                    <div className="center-ratings">
                        {/* Ratings Start */}
                        <Ratings/>  {/* send Ratings value */}

                        {/* No. Of Reviews Start */}
                        <span className="no-of-reviews">
                            Overall Ratings From 255 Visitors
                        </span>
                        {/* No. Of Reviews End */}

                        {/* Reviews Link Start */}
                        <a href className="reviews-link">Show All Reviews</a>
                        {/* Reviews Link End */}
                    </div>
                    {/* Center Ratings Start */}
                    
                    {/* Most Recent Review Start */}
                    <div className="most-recent-review">
                        <p className="most-recent-review-content"> "Good place, good services, nice people"</p>
                        {/* Ratings Start */}
                        <Ratings/>  {/* send Ratings value */}

                        <span className="most-recent-review-date">Sunday, 20 September 2020</span>
                    </div>
                    {/* Most Recent Review End */}
                </div>
            </div>
        </React.Fragment>
    );
    
};
 
export default CenterBasicDetails;