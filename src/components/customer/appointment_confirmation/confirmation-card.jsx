import React from 'react';

const ConfirmationCard = props => {
   
    const bookingInfo = props.bookingInfo;
    return ( 
        <React.Fragment>
            <div className="confirm-card div-border">
                <div className="confirm-img">
                    <img width={"100%"} height={200} src="assets/confirm.jpg" alt=""/>
                    <span><i className="far fa-check-circle"/></span>
                    <p>Your booking was successfully submitted!</p>
                </div>
                <p className="confirm-notify m-4">
                    <i className="far fa-envelope pr-2" />
                    We notified Center {bookingInfo.centerName} of your booking
                </p>
                <p className="confirm-phone m-4">
                    <i className="fas fa-phone-alt pr-2" />
                    Center number: {bookingInfo.telephone}
                </p>
            </div>
        </React.Fragment>
    );
    
};
 
export default ConfirmationCard;