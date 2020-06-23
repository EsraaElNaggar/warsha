import React from "react";
import { useForm } from "react-hook-form";

const Input = props => {
    const { name, type, placeholder, value, onChange, className, error, errorClasses, ref } = props;
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
                ref={ref}
            />
            {error && <div htmlFor={name}
                className={errorClasses}>
                {error}
            </div>}
        </React.Fragment>
    );
};

export default Input;