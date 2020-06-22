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
//import Nav from "./components/core/nav";

function App() {
  return (
    <React.Fragment>
      <ShowProfileUser></ShowProfileUser>
    </React.Fragment>
  );
}

export default App;
