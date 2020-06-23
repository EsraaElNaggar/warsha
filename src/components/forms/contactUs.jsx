import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from 'react-router-dom';

const ContactUsSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .test("len", "Very short name ", val => val.length >= 2),
  email: yup
    .string()
    .required()
    .email(),
  number: yup
    .string()
    .required()
    .matches(
      "/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/",
      "Phone is not valid"
    ),
  comment: yup
    .string()
    .required()
    .test("len", "Very short brand name", val => val.length >= 10)
});

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = data => {
    setName(data.name);
    setEmail(data.email);
    setNumber(data.number);
    setAddress(data.address);
    console.log(data);
    // console.log(userName);
  };

  const { register, handleSubmit, errors } = useForm({
    validationSchema: ContactUsSchema
  });

  return (
    <React.Fragment>
      <div className="contWrap">
        <Link to="/" className="logo animation a1">
          <span>W</span>arsha
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} className="form animation a1">
          <h2 className="lFTitle animation a1">Contact us</h2>
          <p>Fill this form, so we could contact you as soon as possible</p>
          <div style={{ display: "flex" }}>
            <div className="labels">
              <label htmlFor="name">Your Name</label>
              <label htmlFor="number">Phone Number</label>
              <label htmlFor="email">Email Address</label>
              <label htmlFor="comment">Comment</label>
            </div>
            <div className="form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="form-field animation a2"
                autoFocus
                ref={register}
              />
              {errors.name && (
                <div className="myError animation a1">{errors.name.message}</div>
              )}
              <input
                type="text"
                name="number"
                id="number"
                placeholder="+20 123 45678910"
                className="form-field animation a3"
                ref={register}
              />
              {errors.number && (
                <div className="myError animation a1">{errors.number.message}</div>
              )}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="form-field animation a4"
                ref={register}
              />
              {errors.email && (
                <div className="myError animation a1">{errors.email.message}</div>
              )}
              <textarea
                name="comment"
                id="comment"
                cols={30}
                rows={5}
                className="form-field animation a5"
                defaultValue={""}
                ref={register}
              />
              {errors.comment && (
                <div className="myError animation a1">{errors.comment.message}</div>
              )}
            </div>
          </div>
          <input
            className="formBtn animation a6"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
