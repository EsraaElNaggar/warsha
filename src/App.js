import React from "react";
import { Link } from "react-router-dom";
import AddReviewUser from "./components/forms/addReviewUser";
import AddAppointmentCenter from "./components/forms/addAppointmentCenter";
import ChangePasswordUser from "./components/forms/changePasswordUser";
import EditProfileUser from "./components/editProfileUser";
import ContactUS from "./components/forms/contactUs";
import EditProfileCenter from "./components/editProfileCenter";
import ReviewsCenter from "./components/reviewsCenter";
import AppointmentsUser from "./components/appointmentsUser";
import AsideMenuProfileUser from "./components/asideMenuProfileUser";
import ShowProfileUser from "./components/showProfileUser";
import MainProfileDataCenter from "./components/mainProfileDataCenter";
//import Nav from "./components/core/nav";

import SignupCenter from "./components/Authentication/signupCenter";
import ShowProfileCenter from "./components/showProfileCenter";

function App() {
  return (
    <React.Fragment>
      {/* <ShowProfileCenter></ShowProfileCenter> */}
      {/* <EditProfileCenter></EditProfileCenter> */}
      <MainProfileDataCenter></MainProfileDataCenter>
    </React.Fragment>
  );
}

export default App;
