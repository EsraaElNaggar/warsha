import React, { Component } from "react";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
class ReviewsCenter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="tab">
            <button className="tablinks active">Profile</button>
            <button className="tablinks">Appointments</button>
          </div>
          <div className="tabcontent">
            <h3>Profile</h3>
            <div className="center-details">
              <div className="div1-3">
                <div className="name-img">
                  <img
                    className="center-img"
                    src="./imgs//right-section-image.jpg"
                    alt=""
                  />
                  <p>Center El Yosr</p>
                </div>
                <div className="phone-address">
                  <p>25 yemen street, yemen</p>
                  <p>02-24254547</p>
                  <p>On location service</p>
                </div>
              </div>
              <div className="div2-3">
                <table className="center-table">
                  <tbody>
                    <tr className="tr-center">
                      <th>Profile views</th>
                      <th>Bookings</th>
                    </tr>
                    <tr className="tr-center">
                      <td className="td-center">2500</td>
                      <td className="td-center">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="div3-3">
                <p className="reviews">73 Reviews</p>
                <button className="button share-Prof">Share Profile</button>
              </div>
            </div>
            <div className="options">
              <div className="option ">Center Info</div>
              <div className="option active">Reviews</div>
            </div>
            <div className="center-info center-reviews">
              <div>
                <img className="circle" src="./imgs/right-section-image.jpg" alt=""/>
              </div>
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
                <div className="wrap">
                  gfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgdfdgvgdhhbfhbfgbnmbgfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgd
                  gfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgdfdgvgdhhbfhbfgbnmbgfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgd
                  gfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgdfdgvgdhhbfhbfgbnmbgfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgd
                </div>
              </div>
            </div>
            <div className="center-info center-reviews">
              <div>
                <img className="circle" src="./imgs/right-section-image.jpg" alt=""/>
              </div>
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
                <div className="wrap">
                  gfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgdfdgvgdhhbfhbfgbnmbgfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgd
                  gfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgdfdgvgdhhbfhbfgbnmbgfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgd
                  gfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgdfdgvgdhhbfhbfgbnmbgfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgd
                </div>
              </div>
            </div>
            <div className="center-info center-reviews">
              <div>
                <img className="circle" src="./imgs/right-section-image.jpg" alt=""/>
              </div>
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
                <div className="wrap">
                  gfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgdfdgvgdhhbfhbfgbnmbgfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgd
                  gfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgdfdgvgdhhbfhbfgbnmbgfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgd
                  gfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgdfdgvgdhhbfhbfgbnmbgfmdvdfvbnhbnhgddhhbfhbfgbnmbgfmdvdfvbnhbnhgd
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewsCenter;
