import { useState } from "react";

const useRegistration = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState([]);
    const [shouldShowPasswordErrors, setShouldShowPasswordErrors] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;

        if (name === "password") {
            setPassword(value);
            validatePassword();
            setShouldShowPasswordErrors(true);
        }

        if (name === "email") {
            setEmail(value);
        }
    };

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const validateEmail = () => {
        let parts = email.split("@");
        if (parts[0].length === 0 || parts[1] !== "monterail.com") {
            setEmailError("Invalid email");
            return false;
        }
        return true;

    }

    const stringContainsNumber = (str) => {
        return /\d/.test(str);
    }

    const containsAnyLetter = (str) => {
        return /[a-zA-Z]/.test(str);
    }

    const validatePassword = () => {
        let isValid = true;
        const passwordError = [];

        if (!stringContainsNumber(password)) {
            passwordError.push("No number");
            isValid = false;
        }

        if (!containsAnyLetter(password)) {
            passwordError.push("No letter");
            isValid = false;
        }

        if (password.length < 8) {
            passwordError.push("Too short");
            isValid = false;
        }

        setPasswordError(passwordError);
        return isValid;
    }

    const validate = () => {
        clearErrors();
        setShouldShowPasswordErrors(true);
        let isValid = true;

        if (!validateEmail()) {
            isValid = false;
        }

        if (!validatePassword()) {
            isValid = false;
        }

        return isValid;
    }

    console.log({ password, passwordError, email, emailError });

    return {
        handleChange, email, emailError, password, passwordError, shouldShowPasswordErrors, validate
    };
}

export default useRegistration;