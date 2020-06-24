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
        <h3 class="tabContentTitle part2">Reviews</h3>

        <div className="profile-center-info">
          {this.state.reviews.map(review => (
            <React.Fragment>
              <div className="center-reviews">
                {/* <div>
                  <img
                    className="circle"
                    src="./imgs/right-section-image.jpg"
                    alt=""
                  />
                </div> */}
                <h3>{review.name}</h3>
                <div className="wrapStar">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p className="review">{review.userReview}</p>
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
