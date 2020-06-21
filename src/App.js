import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import AddReviewUser from "./components/addReviewUser";
import AddAppointmentCenter from "./components/addAppointmentCenter";
import ChangePasswordUser from "./components/changePasswordUser";
import EditProfileUser from "./components/editProfileUser";
import ContactUS from "./components/contactUs";
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
