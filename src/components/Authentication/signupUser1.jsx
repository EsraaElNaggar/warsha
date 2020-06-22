import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from '../common/input';

class SignUpUser1 extends Component {
    state = {
        account: {
            fName: "",
            lName: "",
            userEmail: "",
            userPassword: "",
            cPassword: ""
        },
        errors: {}
    }
    schema = {
        fName: Joi.string()
            .required()
            .label("First Name"),
        lName: Joi.string()
            .required()
            .label("Last Name"),
        userEmail: Joi.string()
            .email({ minDomainAtoms: 2 })
            .label("Email"),
        userPassword: Joi.string()
            .required()
            .min(9)
            .max(30)
            .label("Password"),
        cPassword: Joi.ref('userPassword')
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
        account[target.id] = target.value;
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
                            name="fName"
                            id="fName"
                            placeholder="First Name"
                            className="form-field animation a1"
                            value={this.state.account.fName}
                            error={this.state.errors.fName}
                            onChange={this.handleChange}
                            errorClasses="myError "
                            autoFocus
                            autoComplete="on"
                        />

                        <Input
                            type="text"
                            name="lName"
                            id="lName"
                            placeholder="Last Name"
                            className="form-field animation a1"
                            value={this.state.account.lName}
                            error={this.state.errors.lName}
                            onChange={this.handleChange}
                            errorClasses="myError "
                        />

                        <Input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="Email Address"
                            className="form-field animation a2"
                            value={this.state.account.userEmail}
                            error={this.state.errors.userEmail}
                            onChange={this.handleChange}
                            errorClasses="myError "
                            autoComplete="on"
                        />

                        <Input
                            type="password"
                            name="userPassword"
                            id="userPassword"
                            placeholder="Password"
                            className="form-field animation a3"
                            value={this.state.account.userPassword}
                            error={this.state.errors.userPassword}
                            onChange={this.handleChange}
                            errorClasses="myError "
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
                            errorClasses="myError "
                        />

                        <button type="submit" className="formBtn animation a4" >sign up</button>
                        <div id="or" className="animation a5">
                            <span id="s1"></span>
                            <p>or</p>
                            <span id="s2"></span>
                        </div>
                        <span className="animation a6">Already on Warsha? <a href="#"> Login</a></span>
                    </form>

                </div>
            </React.Fragment>
        );
    }
}

export default SignUpUser1;