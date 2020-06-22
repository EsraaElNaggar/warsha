import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const EditProfileSchema = yup.object().shape({
  firstname: yup
    .string()
    .required()
    .test("len", "Very short first name ", val => val.length >= 2),
  lastname: yup
    .string()
    .required()
    .test("len", "Very short last name ", val => val.length >= 2),
  email: yup
    .string()
    .required()
    .test("len", "Very short email", val => val.length >= 2)
    .email(),
  address: yup
    .string()
    .required()
    .test("len", "Very short address", val => val.length >= 20),
  brand: yup
    .string()
    .required()
    .test("len", "Very short brand name", val => val.length >= 2),
  model: yup
    .string()
    .required()
    .test("len", "Very short model name", val => val.length >= 2),
  year: yup
    .string()
    .required()
    .test("len", "Very short year length", val => val.length === 4),
  city: yup.string().required(),
  area: yup.string().required()
});

const EditProfileUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const onSubmit = data => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setAddress(data.address);
    setBrand(data.brand);
    setModel(data.model);
    setYear(data.year);
    console.log(data);
    // console.log(userName);
  };

  const { register, handleSubmit, errors } = useForm({
    validationSchema: EditProfileSchema
  });

  return (
    <React.Fragment>
      <div className="body">
        {/* <div className="content">
          <div className="active">Profile</div>
          <div>My Appointemets</div>
          <div>Change Password</div>
        </div> */}
        <div className="login-box top-space">
          <h2>Manage profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-box">
              <input
                className="input"
                type="text"
                name="firstname"
                ref={register}
              />
              {errors.firstname && (
                <p style={{ color: "red" }}>{errors.firstname.message}</p>
              )}
              <label>First name</label>
            </div>
            <div className="user-box">
              <input
                className="input"
                type="text"
                name="lastname"
                ref={register}
              />
              {errors.lastname && (
                <p style={{ color: "red" }}>{errors.lastname.message}</p>
              )}
              <label>Last name</label>
            </div>
            <div className="user-box">
              <input
                className="input"
                type="email"
                name="email"
                ref={register}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                className="input"
                type="text"
                name="address"
                ref={register}
              />
              {errors.address && (
                <p style={{ color: "red" }}>{errors.address.message}</p>
              )}
              <div className="position">
                <select name="city" className="option-styling">
                  <option>City</option>
                  <option>Unitd kingdom</option>
                  <option>United States</option>
                  <option>Beru</option>
                </select>
                {errors.city && (
                  <p style={{ color: "red" }}>{errors.city.message}</p>
                )}
                <select name="area" className="option-styling">
                  <option>Area</option>
                  <option>Unitd kingdom</option>
                  <option>United States</option>
                  <option>Beru</option>
                </select>
                {errors.area && (
                  <p style={{ color: "red" }}>{errors.area.message}</p>
                )}
              </div>
              <label>Address</label>
            </div>
            <br />
            <div className="user-box">
              <label>Car details</label>
              <br />
              <br />
              <div className="position">
                <input
                  className="dimensions"
                  placeholder="Brand"
                  type="text"
                  name="brand"
                  ref={register}
                />
                {errors.brand && (
                  <p style={{ color: "red" }}>{errors.brand.message}</p>
                )}
                <input
                  className="dimensions"
                  placeholder="Model"
                  type="text"
                  name="model"
                  ref={register}
                />
                {errors.model && (
                  <p style={{ color: "red" }}>{errors.model.message}</p>
                )}
                <input
                  className="dimensions"
                  placeholder="Year"
                  type="text"
                  name="year"
                  ref={register}
                />
                {errors.year && (
                  <p style={{ color: "red" }}>{errors.year.message}</p>
                )}
              </div>
            </div>
            <div className="save">
              <input className="a" type="submit" value="Submit" />

              {/* <span className="a" href="#">
                <span />
                <span />
                <span />
                <span />
                Cancel
              </span> */}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditProfileUser;
