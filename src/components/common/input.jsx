import React from "react";

const Input = props => {
    const { name, type, placeholder, value, onChange, className, error, errorClasses } = props;
    return (
        <React.Fragment>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={className}
                value={value}
                onChange={onChange}
            />
            {error && <div for={name}
                className={errorClasses}>
                {error}
            </div>}
        </React.Fragment>
    );
};

export default Input;