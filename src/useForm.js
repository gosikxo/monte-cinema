import { useState, useEffect } from "react";

const useForm = () => {
    const[inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        const {name, inputs} = e.target
        setInputs({
            ...inputs, 
            [name]: value
        })
    }
}