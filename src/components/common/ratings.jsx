import React from "react";

const Ratings = props => {
    return (
        <React.Fragment>
            <span className="ratings">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
            </span>
        </React.Fragment>
    );
};

export default Ratings;