import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="footer">
                    <Link to="/" className="logo">
                        <span>W</span>arsha
                    </Link>
                    <div><Link to="/aboutus">About us</Link></div>
                    <div><Link to="/contactus">Contact us</Link></div>
                    <div><Link to="/centersignup">Warsha for Centers</Link></div>
                    <div>
                        {/* <a to=""><i className="fab fa-facebook"></i></a> */}
                        {/* <a to=""><i className="fab fa-twitter"></i></a> */}
                    </div>
                </div>
                <p>Copyright © 2020 Warsha. All Rights Reserved.</p>
            </footer>
        </React.Fragment>
    );
};

export default Footer;