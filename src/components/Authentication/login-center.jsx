import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from './../common/input';
import { Link } from 'react-router-dom';
import axios from "axios"
import { setInStorage, getFromStorage } from '../../_utils/local-storage';
import { ToastContainer, toast } from "react-toastify";
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
        else {
            axios.get( `http://localhost:4000/centers?centerEmail: ${this.state.account.centerEmail}`)
        .then(res=>{
            let user = res.data.filter(d=>d.centerEmail===this.state.account.centerEmail)[0]
            console.log(user.password)
            console.log(this.state.account.centerPassword)
            if(user.password == this.state.account.centerPassword){
                console.log("hi")
                const token = Math.random();
                setInStorage('authToken', String(token));
                setInStorage('currentID', res.data[0].id);
                this.props.history.replace("/centerprofile");
            }
            else{
                toast("Wrong Password", {type:"error"});
            }
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
                        <Link to="/">
                            <span>W</span>arsha
                        </Link>
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

                        <button type="submit" className="formBtn animation a4">Login</button>

                        <div id="or" className="animation a5">
                            <span id="s1"></span>
                            <p>or</p>
                            <span id="s2"></span>
                        </div>
                        <span className="animation a6">New to Warsha? <Link to="/centersignup">Join now</Link></span>
                    </form>
                </div>

            </React.Fragment >
        );
    }
}

export default LoginCenter;