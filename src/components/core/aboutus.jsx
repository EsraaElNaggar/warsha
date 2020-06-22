import React from 'react';
const AboutUs = props => {
    return (
        <section className="aboutus">
            <section className="Talal-banner">
                <article className="Talal-banner-shape"></article>
                <article className="Talal-banner-introduction">
                    <h2>Who are we ?</h2>
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
        </section>
    );
};

export default AboutUs;