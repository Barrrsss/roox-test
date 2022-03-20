import React, { useCallback } from 'react';


function Validate(initialValues:any) {
    const [values, setValues] = React.useState(initialValues);
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);


    const handleChange = (event:any) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity() );
    };
    const buttonUnlock = () => {
        setIsValid(true);
    };


    return { values, handleChange, buttonUnlock, errors, isValid };
}
export { Validate };
