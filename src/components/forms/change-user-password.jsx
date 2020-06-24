import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "../common/input";

const PasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .test("len", "Very short password", val => val.length >= 8)
    .matches("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"),
  newPassword: yup
    .string()
    .required()
    .test("len", "Very short new password", val => val.length >= 8)
    .matches("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$")
});

const ChangeUserPassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmit = data => {
    setPassword(data.password);
    setNewPassword(data.newPassword);
    console.log(password);
    console.log(newPassword);

    console.log(data);
  };
  const { register, handleSubmit, errors } = useForm({
    validationSchema: PasswordSchema
  });
  return (
    <React.Fragment>
      {/* <div className="content">
          <div>Profile</div>
          <div>My Appointemets</div>
          <div className="active">Change Password</div>
        </div> */}
      <div className="login-box ">
        <div className="booking-info b-radius-10 div-border">
          <h2 className="booking-info-title">Change Password</h2>
          <div className="user-box">
            <div className="labels">
              <label htmlFor="password">Password</label>
              <label htmlFor="newPassword">New Password</label>
            </div>
            <form className="forma" onSubmit={handleSubmit(onSubmit)}>
              <Input
                className="form-field"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={register}
                errorClasses="myError animation a1"
                autofocus
              />
              <Input
                className="form-field"
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="New Password"
                ref={register}
                errorClasses="myError animation a1"
              />
              <button type="submit" className="changeBtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChangeUserPassword;
