import React from 'react';

const Nav = props => {
    const { className } = props;
    return (
        <React.Fragment>
            <nav className={className}>
                <div className="parts">
                    <h1 className="logo"><span>W</span>arsha</h1>
                </div>
                <div className="parts">
                    <div><a href="">Home</a></div>
                    <div><a href="">About us</a></div>
                    <div><a href="">Contact us</a></div>
                    <div className="navUser">fName</div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Nav;