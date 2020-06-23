import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import Joi from "joi-browser";
import axios from "axios";

import { setInStorage, getFromStorage } from '../../_utils/local-storage';

import Input from './../common/input';

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

    // check if user already logged in
    componentDidMount(){
        const token = getFromStorage('authToken');

        if (token) {
            this.props.history.replace("/home");

        }
    }

    // validate all inputs
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

    // inputs value handler
    handleChange = ({ target }) => {
        const account = { ...this.state.account };
        account[target.id] = target.value;
        this.setState({ account });
    };

    // login backend call
    login = ({email, password}) =>{
        axios.post("http://localhost:3000/users", {
        email,
        password
        }).then(res=>{
            const token = Math.random();
            setInStorage('authToken', String(token));
            this.props.history.replace("/home");
        }).catch(err=>{
            if(err.response.status === 404)
            {
                toast(err.response.data, {type:"error"});
            }
            else if(err.response.status === 406)
            {
                this.setState({errors: {password: err.response.data}});
            }
            else toast("Connection Error", {type:"error"});
        });
    };

    // form submit handler
    handleSubmit = e => {
        e.preventDefault();

        // validate form inputs
        const errors = this.validate();
        if (errors) {
            this.setState({ errors });
            return;
        }
        this.setState({ errors: {} });

        // call backend
        const {userEmail, userPassword} = this.state;
        this.login({userEmail, userPassword});
    };

    render() {
        return (
            <React.Fragment>
                <div className="logWrap " style={{ backgroundImage: `url(/assets/bg2.png)` }}>
                    <div className="logLeft">
                        <Link to="#"><span>W</span>arsha</Link>
                        <h2><strong> Welcome Back !</strong></h2>
                        <p>Find the <span>Nearest</span> mechanic..</p>
                        <p className="pBook">Book online now !</p>
                    </div>

                    <ToastContainer />
                    <form className="form animation a1" onSubmit={this.handleSubmit}>
                        <h2 className="lFTitle animation a1">Login</h2>

                        <Input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="Email Address"
                            className="form-field animation a2"
                            value={this.state.account.userEmail}
                            error={this.state.errors.userEmail}
                            onChange={this.handleChange}
                            errorClasses="myError animation a2"
                            autofocus
                            autoComplete="on"
                        />

                        <Input
                            type="password"
                            name="userPassword"
                            id="userPassword"
                            placeholder="Password"
                            value={this.state.account.userPassword}
                            error={this.state.errors.userPassword}
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
                        <span className="animation a6">New to Warsha? <Link to="/signup">Join now</Link></span>
                    </form>
                </div>
            </React.Fragment >
        );
    }
}

export default LoginUser;