import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="footer">
                    <a href="#" className="logo"><span>W</span>arsha</a>
                    <div><a href="">About us</a></div>
                    <div><a href="">Contact us</a></div>
                    <div><a href="">Warsha for Centers</a></div>
                    <div>
                        {/* <a href=""><i className="fab fa-facebook"></i></a> */}
                        {/* <a href=""><i className="fab fa-twitter"></i></a> */}
                    </div>
                </div>
                <p>Copyright © 2020 Warsha. All Rights Reserved.</p>
            </footer>
        </React.Fragment>
    );
};

export default Footer;