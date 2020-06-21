import React, { useState } from "react";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const AddReviewSchema = yup.object().shape({
  centerName: yup
    .string()
    .required()
    .test("len", "Very short Center Name", val => val.length >= 2),
  workerName: yup
    .string()
    .required()
    .test("len", "Very short Worker Name", val => val.length >= 2),
  review: yup
    .string()
    .required()
    .test("len", "Very short Review", val => val.length >= 5)
});

const AddReviewUser = () => {
  const [centerName, setCenterName] = useState("");
  const [workerName, setWorkerName] = useState("");
  const [review, setReview] = useState("");

  const onSubmit = data => {
    setCenterName(data.centerName);
    setWorkerName(data.workerName);
    setReview(data.review);
    console.log(data);
    console.log(centerName);
    console.log(workerName);
    console.log(review);
  };
  const { register, handleSubmit, errors } = useForm({
    validationSchema: AddReviewSchema
  });
  return (
    <React.Fragment>
      <div className="body">
        <div className="login-box pass">
          <h2>Add Review</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-box">
              <input
                className="input"
                type="text"
                name="centerName"
                ref={register}
              />
              {errors.centerName && (
                <p style={{ color: "red" }}>{errors.centerName.message}</p>
              )}
              <label>Center Name</label>
            </div>
            <div className="user-box">
              <input
                className="input"
                type="text"
                name="workerName"
                ref={register({ required: true, minLength: 2 })}
              />
              {errors.workerName && (
                <p style={{ color: "red" }}>{errors.workerName.message}</p>
              )}
              <label>Worker Name</label>
            </div>
            <div className="user-box">
              <label>Your Review</label>
              <br />
              <br />
              <textarea
                style={{ resize: "none" }}
                className="input"
                type="text"
                name="review"
                ref={register({ required: true, minLength: 2 })}
                defaultValue={""}
              />
              {errors.review && (
                <p style={{ color: "red" }}>{errors.review.message}</p>
              )}
            </div>
            {/* <div className="user-box">
              <label>Rating</label>
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
            </div> */}
            <div className="save">
              <input type="submit" className="a" value="Submit" />
              {/* <span className="a" href="#" value="cancel"></span> */}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddReviewUser;
