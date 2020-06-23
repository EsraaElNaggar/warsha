import React from 'react';

const CenterAbout = props => {
   
    return ( 
        <React.Fragment>
            <div className="center-about b-radius-10 div-border">
                {/* About Title Start */}
                <div className="title-about-title">
                    <i className="fas fa-info-circle" />
                    <span className="about-title">
                        About The Center
                    </span>
                </div>
                {/* About Title End */}

                {/* About Conent Start */}
                <div className="about-conent">
                    <p>
                        {
                            props.about
                            ||
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum repellat atque vel eligendi libero voluptatibus magni id, saepe illo tempore corrupti enim maiores ex cupiditate repellendusreiciendis suscipit blanditiis rerum?'
                        }
                    </p>
                </div>
                {/* About Conent End */}
            </div>
        </React.Fragment>
    );
    
};
 
export default CenterAbout;