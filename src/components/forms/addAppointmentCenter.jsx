import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const AddAppointmentSchema = yup.object().shape({
  centerName: yup
    .string()
    .required()
    .test("len", "Very short Center Name", val => val.length >= 2),
  date: yup.string().required(),
  time: yup.string().required()
});
const AddAppointmentCenter = () => {
  const [centerName, setCenterName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const checked = e => {
    setSelectedOption(e.target.value);
  };
  // const onChangeHandler = e => {
  //   setTime(e.target.value);
  // };

  const onSubmit = data => {
    setCenterName(data.centerName);
    console.log(data);
    console.log(centerName);
  };
  const { register, handleSubmit, errors } = useForm({
    validationSchema: AddAppointmentSchema
  });

  return (
    <React.Fragment>
      <div className="body">
        <div className="login-box pass">
          <h2>Add Appointment</h2>
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
            <div className="alignment">
              <label>Appointment Speciality</label>
              <br />
              <div className="specialities">
                <div>
                  <input type="checkbox" onClick={checked} value="ch1" />
                  <span> Electricity</span>
                </div>
                <div>
                  <input type="checkbox" onClick={checked} value="ch2" />
                  <span> Electricity</span>
                </div>
                <div>
                  <input type="checkbox" onClick={checked} value="ch3" />
                  <span> Electricity</span>
                </div>
              </div>
              <div className="specialities">
                <div>
                  <input type="checkbox" onClick={checked} value="ch4" />
                  <span> Electricity</span>
                </div>
                <div>
                  <input type="checkbox" onClick={checked} value="ch5" />
                  <span> Electricity</span>
                </div>
                <div>
                  <input type="checkbox" onClick={checked} value="ch6" />
                  <span> Electricity</span>
                </div>
              </div>
              <div className="specialities">
                <div>
                  <input type="checkbox" onClick={checked} value="ch7" />
                  <span> Electricity</span>
                </div>
                <div>
                  <input type="checkbox" onClick={checked} value="ch8" />
                  <span> Electricity</span>
                </div>
                <div>
                  <input type="checkbox" onClick={checked} value="ch9" />
                  <span> Electricity</span>
                </div>
              </div>
              {selectedOption === "" && (
                <p style={{ color: "red" }}>
                  Please select at least one option
                </p>
              )}

              <br />
              <div className="alignment">
                <label>Appointment Date</label>
                <input type="date" name="date" ref={register} />
                {errors.date && (
                  <p style={{ color: "red" }}>{errors.date.message}</p>
                )}
              </div>
              <div>
                <label>Appointment Time</label>
                <select name="time">
                  <option>Select Time</option>
                  <option>10 am</option>
                  <option>12 pm</option>
                  <option>2 pm</option>
                  <option>4 pm</option>
                  <option>6 pm</option>
                </select>
                {errors.time && (
                  <p style={{ color: "red" }}>{errors.time.message}</p>
                )}
              </div>
            </div>
            <div className="save">
              <input type="submit" value="Submit" />
              {/* <input type="submit" value="Cancel" /> */}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddAppointmentCenter;
