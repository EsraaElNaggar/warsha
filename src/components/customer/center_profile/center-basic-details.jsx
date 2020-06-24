import React from 'react';
import Ratings from '../../common/ratings';
import { Link } from 'react-router-dom';

const CenterBasicDetails = props => {
   
    const center = props.center;

    return ( 
        <React.Fragment>
            <div className="center-basic-details d-flex justify-content-around b-radius-10 div-border">
                {/* Center Image Start */}
                <div className="center-details-img-container">
                    <img style={{width:"124px", height:"124px"}} src="/assets/mechanistic.jpg" alt="" className="center-details-img img-circle" />
                </div>
                {/* Center Image End */}

                <div className="center-basic-info">
                    <span className="d-flex justify-content-between mb-3">
                        {/* Center Name Start */}
                        <span className="center-basic-name">
                            Center {center.centerName}
                        </span>
                        {/* Center Name End*/}

                        {/* No. Of Views Start */}
                        <span className="no-of-views">
                        {center.noOfViews} View(s)
                        </span>
                        {/* No. Of Views End */}
                    </span>

                    {/* Center speciality Start */}
                    <h6 className="center-speciality">
                        Speciality Of {center.speciality}
                    </h6>
                    {/* Center speciality End */}

                    {/* Center Ratings Start */}
                    <div className="center-ratings">
                        {/* Ratings Start */}
                        <Ratings
                            ratingValue={center.totalRating}
                        /> 

                        {/* No. Of Reviews Start */}
                        <span className="no-of-reviews">
                            Overall Ratings From {center.noOfVisitors} Visitors
                        </span>
                        {/* No. Of Reviews End */}

                        {/* Reviews Link Start */}
                        <Link to="#" className="reviews-link">Show All Reviews</Link>
                        {/* Reviews Link End */}
                    </div>
                    {/* Center Ratings Start */}
                    
                    {/* Most Recent Review Start */}
                    <div className="most-recent-review">
                        <p className="most-recent-review-content"> "Good place, good services, nice people"</p>
                        {/* Ratings Start */}
                        <Ratings
                            ratingValue={center.totalRating}
                        />

                        <span className="most-recent-review-date">Sunday, 20 September 2020</span>
                    </div>
                    {/* Most Recent Review End */}
                </div>
            </div>
        </React.Fragment>
    );
    
};
 
export default CenterBasicDetails;