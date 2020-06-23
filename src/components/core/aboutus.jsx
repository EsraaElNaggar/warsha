import React from 'react';

import Nav from './nav/nav';
import Footer from './footer';
import { Link } from 'react-router-dom';

const AboutUs = props => {
    return (
        <React.Fragment>

            {/* Navbar */}
            <Nav className="white" />

            {/* new About us  */}
            {/* what is warsha?  */}
            <section className="logWrap landWrap about">
                <div className="logLeft aboutt land ">
                    <Link to="/"><span>W</span>arsha</Link>

                    {/* <h2><strong>Your Platform for </strong> <br /> <strong>Car Services</strong></h2> */}
                    {/* <h2><strong> Welcome to our Website!</strong></h2> */}
                    {/* <p className="pBook">Book online now !</p> */}
                    <p className="aboutWarsha">Warsha is an E-commerce car services platform for different car users that allows to book car maintenance appointments, buy and sell spare parts  and buy, sell or rent cars</p>
                </div>
                <div className="aboutUs"></div>
            </section>
            <div className="miniALine"></div>
            <section className="whoAreWe" >
                <div className="logWrap landWrap team">
                    <div className="logLeft aboutt land ">
                        {/* <Link to="/"><span>W</span>arsha</Link> */}
                        <h1>Who are we?</h1>
                        <p className="aboutWarsha">We are a group of fresh graduate developer</p>
                        <div className="flexii">
                            <div>
                                <div className="mo" ></div>
                                <h3>Mona Mohamed</h3>
                                <p>Web Developer</p>
                            </div>
                            <div>
                                <div className="es"></div>
                                <h3>Esraa ElNaggar</h3>
                                <p>Front-End Developer</p>
                            </div>

                            <div>
                                <div className="ha"></div>
                                <h3>Mariam Hasan</h3>
                                <p>Web Developer</p>
                            </div>
                            <div>
                                <div className="ta"></div>
                                <h3>Maryam Talal</h3>
                                <p>Web Developer</p>
                            </div>
                        </div>
                        {/* <h2><strong>Your Platform for </strong> <br /> <strong>Car Services</strong></h2> */}
                        {/* <h2><strong> Welcome to our Website!</strong></h2> */}
                        {/* <p className="pBook">Book online now !</p> */}
                    </div>
                    {/* <div className="aboutTeam"></div> */}
                </div>
            </section>


            {/* About Us Container */}
            {/* <section className="aboutus">
                <section className="Talal-banner">
                    <article className="Talal-banner-shape"></article>
                    <article className="Talal-banner-introduction">
                        <h2>Who are we?</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero voluptas quae totam nisi maiores tempora consectetur mollitia ipsum ullam.
                        <i className="fas fa-angle-down Talal-angle-down"></i>
                    </article>
                </section>
                <section className="about-us-team">
                    <h2>Team Members</h2>
                    <article className="person-card">
                        <div className="person-pic">
                            <div></div>
                        </div>
                        <div className="person-quote">
                            <h2>Mona Mohammed</h2>
                            <span><i className="fas fa-quote-left quote-marks"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem quo et quasi voluptate id reiciendis debitis architecto beatae qui soluta, atque nemo ducimus adipisci delectus blanditiis non. Harum, doloribus.
                            <i className="fas fa-quote-right quote-marks"></i>
                            </span>
                        </div>
                    </article>

                    <article className="person-card">
                        <div className="person-quote">
                            <h2>Esraa El-Naggar</h2>
                            <span><i className="fas fa-quote-left quote-marks"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem quo et quasi voluptate id reiciendis debitis architecto beatae qui soluta, atque nemo ducimus adipisci delectus blanditiis non. Harum, doloribus.
                            <i className="fas fa-quote-right quote-marks"></i></span>
                        </div>
                        <div className="person-pic"> <div></div></div>
                    </article>
                    <article className="person-card">
                        <div className="person-pic"><div></div></div>
                        <div className="person-quote">
                            <h2>Maryam Hassan</h2>
                            <span><i className="fas fa-quote-left quote-marks"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem quo et quasi voluptate id reiciendis debitis architecto beatae qui soluta, atque nemo ducimus adipisci delectus blanditiis non. Harum, doloribus.
                            <i className="fas fa-quote-right quote-marks"></i></span>
                        </div>
                    </article>
                    <article className="person-card">
                        <div className="person-quote">
                            <h2>Talal</h2>
                            <span><i className="fas fa-quote-left quote-marks"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem quo et quasi voluptate id reiciendis debitis architecto beatae qui soluta, atque nemo ducimus adipisci delectus blanditiis non. Harum, doloribus.
                            <i className="fas fa-quote-right quote-marks"></i></span>
                        </div>
                        <div className="person-pic"><div></div></div>
                    </article>
                </section>
            </section> */}

            {/* Footer */}
            <Footer />
        </React.Fragment>
    );
};

export default AboutUs;