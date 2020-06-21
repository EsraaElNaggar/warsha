import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from './input';

class LoginCenter extends Component {
    state = {
        account: {
            centerEmail: "",
            centerPassword: "",
        },
        errors: {}
    };

    schema = {
        centerEmail: Joi.string()
            .email({ minDomainAtoms: 2 })
            .label("Email"),
        centerPassword: Joi.string()
            .required()
            .min(9)
            .max(30)
            .label("Password"),
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        if (errors) {
            this.setState({ errors });
            return;
        }
        this.setState({ errors: {} });
        // this.login(this.state.account);
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

    render() {
        return (
            <React.Fragment>
                <div className="logWrap " style={{ backgroundImage: `url(/assets/bg2.png)` }}>
                    <div className="logLeft">
                        <a href="#"><span>W</span>arsha</a>
                        <h2><strong> Welcome Back !</strong></h2>
                        <p>Check your <span>Appointments</span> ...</p>
                        <p className="pBook">Provide new services now !</p>
                    </div>


                    <form className="form animation a1" onSubmit={this.handleSubmit}>
                        <h2 className="lFTitle animation a1">Login</h2>

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
                            autofocus
                            autoComplete="on"
                        />

                        <Input
                            type="password"
                            name="centerPassword"
                            id="centerPassword"
                            placeholder="Password"
                            value={this.state.account.centerPassword}
                            error={this.state.errors.centerPassword}
                            onChange={this.handleChange}
                            className="form-field animation a3"
                            errorClasses="myError animation a3"
                        />

                        <button className="formBtn animation a4">Login</button>

                        <div id="or" className="animation a5">
                            <span id="s1"></span>
                            <p>or</p>
                            <span id="s2"></span>
                        </div>
                        <span className="animation a6">New to Warsha? <a href="#">join now</a></span>
                    </form>
                </div>

            </React.Fragment >
        );
    }
}

export default LoginCenter;