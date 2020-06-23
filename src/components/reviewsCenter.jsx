import React, { Component } from "react";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

class ReviewsCenter extends Component {
  state = {
    reviews: [
      { name: "ali", userReview: "good place" },
      { name: "saeed", userReview: "high quality" },
      { name: "ali", userReview: "friendly people" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.reviews.map(review => (
            <React.Fragment>
              <div className="center-info center-reviews">
                {/* <div>
                  <img
                    className="circle"
                    src="./imgs/right-section-image.jpg"
                    alt=""
                  />
                </div> */}
                <div>{review.name}</div>
                <div className="flex-col">
                  <div>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="wrap">{review.userReview}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
          <div className="tabcontent"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewsCenter;
