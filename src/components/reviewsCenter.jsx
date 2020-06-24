import React, { Component } from "react";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { getFromStorage } from '../_utils/local-storage';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

class ReviewsCenter extends Component {
  state = {
    reviews: [
      { name: "ali", userReview: "good place" },
      { name: "saeed", userReview: "high quality" },
      { name: "ali", userReview: "friendly people" }
    ],
    centerReviews: []
  };

  componentDidMount(){
    let centerID = getFromStorage('currentID');

    axios.get(`http://localhost:3000/reviews?centerId=${centerID}`)
      .then(res => {
        const reviews = res.data;
        this.setState({ centerReviews: reviews});
        console.log(res);
      }).catch(err => {
        // if (err.response.status === 404) {
        //   toast(err.response.data, { type: "error" });
        // }
        // else if (err.response.status === 406) {
        //   this.setState({ errors: { password: err.response.data } });
        // }
        // else 
        toast("Connection Error", { type: "error" });
      });
  }
  render() {
    return (
      <React.Fragment>
        <h3 class="tabContentTitle part2">Reviews</h3>

        <div className="profile-center-info">
          {this.state.centerReviews.map(review => (
            <React.Fragment>
              <div className="center-reviews">
                {/* <div>
                  <img
                    className="circle"
                    src="./imgs/right-section-image.jpg"
                    alt=""
                  />
                </div> */}
                <h3>{review.reviewContent}</h3>
                <div className="wrapStar">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                </div>
                <p className="review">{review.clientName}</p>
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
