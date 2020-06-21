import React, { Component } from "react";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

class AppointmentsUser extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="body">
          <div className="content">
            <div>Profile</div>
            <div className="active">My Appointemets</div>
            <div>Change Password</div>
          </div>
          <table className="table">
            <tbody>
              <tr className="tr">
                <th className="th">Center Name</th>
                <th className="th">Center Address</th>
                <th className="th">Appointement Details</th>
              </tr>
              <tr className="tr">
                <td className="td">Alfreds Futterkiste</td>
                <td className="td">Maria Anders</td>
                <td className="td">
                  <p>vhgbdghcvdhbf dvfb fv dbndffdb</p>
                  <div className="col-flex">
                    <i className="far fa-check-circle" />
                    <i className="fas fa-window-close" />
                    <button className="button">Report problem</button>
                  </div>
                </td>
              </tr>
              <tr className="tr">
                <td className="td">Centro comercial Moctezuma</td>
                <td className="td">Francisco Chang</td>
                <td className="td">
                  <p>vhgbdghcvdhbf dvfb fv dbndffdb</p>
                  <div className="col-flex">
                    <i className="far fa-check-circle" />
                    <i className="fas fa-window-close" />
                    <button className="button">Report problem</button>
                  </div>
                </td>
              </tr>
              <tr className="tr">
                <td className="td">Ernst Handel</td>
                <td className="td">Roland Mendel</td>
                <td className="td">
                  <p>vhgbdghcvdhbf dvfb fv dbndffdb</p>
                  <div className="col-flex">
                    <i className="far fa-check-circle" />
                    <i className="fas fa-window-close" />
                    <button className="button">Report problem</button>
                  </div>
                </td>
              </tr>
              <tr className="tr">
                <td className="td">Island Trading</td>
                <td className="td">Helen Bennett</td>
                <td className="td">
                  <p>vhgbdghcvdhbf dvfb fv dbndffdb</p>
                  <div className="col-flex">
                    <i className="far fa-check-circle" />
                    <i className="fas fa-window-close" />
                    <button className="button">Report problem</button>
                  </div>
                </td>
              </tr>
              <tr className="tr">
                <td className="td">Laughing Bacchus Winecellars</td>
                <td className="td">Yoshi Tannamuri</td>
                <td className="td">
                  <p>vhgbdghcvdhbf dvfb fv dbndffdb</p>
                  <div className="col-flex">
                    <i className="far fa-check-circle" />
                    <i className="fas fa-window-close" />
                    <button className="button">Report problem</button>
                  </div>
                </td>
              </tr>
              <tr className="tr">
                <td className="td">Magazzini Alimentari Riuniti</td>
                <td className="td">Giovanni Rovelli</td>
                <td className="td">
                  <p>vhgbdghcvdhbf dvfb fv dbndffdb</p>
                  <div className="col-flex">
                    <i className="far fa-check-circle" />
                    <i className="fas fa-window-close" />
                    <button className="button">Report problem</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default AppointmentsUser;
