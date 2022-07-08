import { useState } from "react";

const useRegistration = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        emailError: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;

        console.log({name, value});
        setInputs({
            ...inputs,
            [name]: value
        })
    };

    console.log(inputs)
    const validate = () => {
        let importantPart =  inputs.email.split("@");
        if(importantPart[1] !== "monterail.com") {
            setInputs({...inputs, emailError: "Invalid email"});
            return false;
        }
        return true;
       
    }

    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validate();
    }

    return { handleChange, inputs, validate };
}

export default useRegistration;