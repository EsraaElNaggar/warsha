import React, { Component } from 'react';
import Joi from "joi-browser";

class LoginUser extends Component {
    state = {
        account: {
            userEmail: "",
            userPassword: "",
        },
        errors: {}
    };

    schema = {
        userEmail: Joi.string()
            .email({ minDomainAtoms: 2 })
            .label("Email"),
        userPassword: Joi.string()
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
        this.login(this.state.account);
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
                <div className="logWrap ">
                    <div className="logLeft">
                        <a><span>W</span>arsha</a>

                        <h2><strong> Welcome Back !</strong></h2>
                        <p>Find the <span>Nearest</span> mechanic..</p>
                        <p className="pBook">Book online now !</p>
                    </div>


                    <form className="form animation a1" onSubmit={this.handleSubmit}>
                        <h2 className="lFTitle animation a1">Login</h2>

                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="Email Address" className="form-field animation a2"
                            value={this.state.account.userEmail}
                            error={this.state.errors.userEmail}
                            onChange={this.handleChange}
                            autofocus
                            autoComplete="on"
                        />
                        {error && <div for="userEmail"
                            className="myError animation a2">
                            {this.state.errors.userEmail}
                        </div>}

                        <input
                            type="password"
                            name="userPassword"
                            id="userPassword"
                            placeholder="Password"
                            value={this.state.account.userPassword}
                            error={this.state.errors.userPassword}
                            onChange={this.handleChange}
                            className="form-field animation a3"
                        />
                        {error && <div for="userPassword"
                            className="myError animation a2">
                            {this.state.errors.userPassword}
                        </div>}

                        <button className="formBtn animation a4">Login</button>

                        <div id="or" className="animation a5">
                            <span id="s1"></span>
                            <p>or</p>
                            <span id="s2"></span>
                        </div>
                        <span className="animation a6">New to Warsha? <a href="#">join now</a></span>
                    </form>
                </div>

            </React.Fragment>
        );
    }
}

export default LoginUser;