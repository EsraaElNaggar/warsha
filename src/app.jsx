import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginUser from './components/Authentication/login-user';
import SignupUser from './components/Authentication/signup-user';
import Home from './components/core/home/home';
import ErrorPage from './components/core/error';
import AboutUs from './components/core/aboutus';
import CustomerProfile from './components/customer/customer_profile/customer-profile';
import ContactUs from './components/forms/contactUs';
import LoginCenter from './components/Authentication/login-center';
import SignupCenter from './components/Authentication/signup-center';
import SearchResult from './components/customer/search_result/search-result';
import MainProfileDataCenter from './components/mainProfileDataCenter';
import AddAppointmentCenter from './components/forms/addAppointmentCenter';
import CenterAppointments from './components/center/center_appointments_List/center-appointments';
import Appointment from './components/center/appointments_day/appointment';
import AppointmentsDay from './components/center/appointments_day/appointments-day';
import CenterProfile from './components/customer/center_profile/center-profile';


class App extends Component {
  state = {
    searchResult: [],
    center: ""
  };

  // search data handler
  handleSearch = searchResult => {
    this.setState({ searchResult });
  };

  openCenterProfile = center =>{
    this.setState({ center });
  }

  render() {
    return (

      <React.Fragment>
        <Switch>
          {/* Customer Interface */}

          {/* LogIn */}
          <Route path="/login" component={LoginUser} />

          {/* SignUp */}
          <Route path="/signup" component={SignupUser} />

          {/* Home */}
          <Route path="/home" exact
            render={props => (
              <Home
                {...props}
                handleSearch={this.handleSearch}
              />
            )}
          />

          {/* About Us */}
          <Route path="/aboutus" component={AboutUs} />

          {/* Contact Us */}
          <Route path="/contactus" component={ContactUs} />

          {/* My Profile */}
          <Route path="/myprofile" component={CustomerProfile} />

          {/* Search Result */}
          <Route path="/searchresult"
            render={props => (
              <SearchResult
                {...props}
                centers={this.state.searchResult}
                openCenterProfile={this.openCenterProfile}
              />
            )}
          />

          {/* Center Profile */}
          <Route path="/centerprofile"
            render={props => (
              <CenterProfile
                {...props}
                center={this.state.center}
              />
            )}
          />

          {/* Center Interface */}

          {/* LogIn */}
          <Route path="/centerlogin" component={LoginCenter} />

          {/* SignUp */}
          <Route path="/centersignup" component={SignupCenter} />

          {/* Center Profile */}
          <Route path="/centermainprofile" component={MainProfileDataCenter} />

          {/* Add Appointments */}
          <Route path="/addappointments" component={AddAppointmentCenter} />

          {/* Appointments */}
          <Route path="/appointment" component={Appointment} />

          {/* Center Apointments */}
          <Route path="/centerappointments" component={CenterAppointments} />

          {/* NotFound Page */}
          <Route path="/notfound" component={ErrorPage} />

          {/* Redirect to Home */}
          <Redirect from="/" to="/home" />

          {/* Redirect to NotFound Page */}
          <Redirect to="/notfound" />

        </Switch>
      </React.Fragment>
    );
  }
}

export default App;