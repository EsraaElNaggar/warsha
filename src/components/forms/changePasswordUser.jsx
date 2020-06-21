import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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

const ChangePasswordUser = () => {
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
      <div className="body">
        <div className="content">
          <div>Profile</div>
          <div>My Appointemets</div>
          <div className="active">Change Password</div>
        </div>
        <div className="login-box pass">
          <h2>Change Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-box">
              <input
                className="input"
                type="text"
                name="password"
                ref={register}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                className="input"
                type="text"
                name="newPassword"
                ref={register}
              />
              {errors.newPassword && (
                <p style={{ color: "red" }}>{errors.newPassword.message}</p>
              )}
              <label>New Password</label>
            </div>
            <div className="save">
              <input className="a" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChangePasswordUser;
