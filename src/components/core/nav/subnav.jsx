import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = props => {
   
    return ( 
        <React.Fragment>
            <div className="parts">
                <div><Link to="/centersignup">Warsha for Centers</Link></div>
                <div><Link to="/login">Login</Link></div>
                <button href="">Sign up</button>
            </div>
        </React.Fragment>
    );
    
};
 
export default SubNav;