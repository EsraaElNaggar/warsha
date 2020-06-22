import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from '../common/input';
import { Link } from 'react-router-dom';

class SignupCenter1 extends Component {
    state = {
        account: {
            centerName: "",
            ownerName: "",
            phoneNumber: "",
            centerEmail: "",
            centerPassword: "",
            cPassword: ""
        },
        errors: {}
    }
    schema = {
        centerName: Joi.string()
            .required()
            .label("Center Name"),
        ownerName: Joi.string()
            .required()
            .label("Owner Name"),
        phoneNumber: Joi.number()
            .required()
            .label('Phone Number'),
        centerEmail: Joi.string()
            .email({ minDomainAtoms: 2 })
            .label("Email"),
        centerPassword: Joi.string()
            .required()
            .min(9)
            .max(30)
            .label("Password"),
        cPassword: Joi.ref('centerPassword')
    };
    validate = () => {
        const result = Joi.validate(this.state.account, this.schema, {
            abortEarly: false
        });
        if (result.error === null) {
            return null;
        }
        const errors = {};
        for (const error of result.error.details) {
            errors[error.path] = error.message;
        }
        return errors;
    };
    handleChange = ({ target }) => {
        const account = { ...this.state.account };
        if (target.files) {
            account[target.id] = target.files[0];
        }
        else {
            account[target.id] = target.value;
        }
        this.setState({ account });
    };
    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        if (errors) {
            this.setState({ errors });
            return;
        }
        this.setState({ errors: {} });
        // logic registration
        this.props.handleNext(this.state.account)
    }


    render() {
        return (
            <React.Fragment>
                <div className="logWrap " style={{ backgroundImage: `url(/assets/bg2.png)` }}>
                    <div className="logLeft">
                        <a href="#"><span>W</span>arsha</a>
                        <h2><strong> Welcome to Warsha !</strong></h2>
                        <p>Find the <span>Nearest</span> mechanic..</p>
                        <p className="pBook">Book online now !</p>
                    </div>
                    <form className="form animation a1" onSubmit={this.handleSubmit}>
                        <h2 className="lFTitle animation a1">Sign Up</h2>
                        <Input
                            type="text"
                            name="centerName"
                            id="centerName"
                            placeholder="Center Name"
                            className="form-field animation a1"
                            value={this.state.account.centerName}
                            error={this.state.errors.centerName}
                            onChange={this.handleChange}
                            errorClasses="myError animation a1"
                            autofocus
                            autoComplete="on"
                        />

                        <Input
                            type="text"
                            name="ownerName"
                            id="ownerName"
                            placeholder="Owner Name"
                            className="form-field animation a1"
                            value={this.state.account.ownerName}
                            error={this.state.errors.ownerName}
                            onChange={this.handleChange}
                            errorClasses="myError animation a1"
                        />

                        <Input
                            type="number"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Phone number"
                            className="form-field animation a2"
                            value={this.state.account.phoneNumber}
                            error={this.state.errors.phoneNumber}
                            onChange={this.handleChange}
                            errorClasses="myError animation a2"
                        />

                        <Input
                            type="email"
                            name="centerEmail"
                            id="centerEmail"
                            placeholder="Email Address"
                            className="form-field animation a2"
                            value={this.state.account.centerEmail}
                            error={this.state.errors.centerEmail}
                            onChange={this.handleChange}
                            errorClasses="myError animation a2"
                            autoComplete="on"
                        />

                        <Input
                            type="password"
                            name="centerPassword"
                            id="centerPassword"
                            placeholder="Password"
                            className="form-field animation a3"
                            value={this.state.account.centerPassword}
                            error={this.state.errors.centerPassword}
                            onChange={this.handleChange}
                            errorClasses="myError animation a3"
                        />

                        <Input
                            type="password"
                            name="cPassword"
                            id="cPassword"
                            placeholder="Confirm Password"
                            className="form-field animation a3"
                            value={this.state.account.cPassword}
                            error={this.state.errors.cPassword}
                            onChange={this.handleChange}
                            errorClasses="myError animation a3"
                        />

                        <button type="submit" className="formBtn animation a4">sign up</button>
                        <div id="or" className="animation a5">
                            <span id="s1"></span>
                            <p>or</p>
                            <span id="s2"></span>
                        </div>
                        <span className="animation a6">Already on Warsha? <Link to="/centerlogin"> Login</Link></span>
                    </form>

                </div>
            </React.Fragment>
        );
    }
}

export default SignupCenter1;