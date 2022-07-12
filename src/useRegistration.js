import { useState } from "react";
import { DateTime } from "luxon";

const useRegistration = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState([]);
  const [shouldShowPasswordErrors, setShouldShowPasswordErrors] =
    useState(false);

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const validateName = () => {
    if (name.length == 0) {
      setNameError("Incorrect name");
      return false;
    }
    return true;
  };
  const validateLastName = () => {
    if (lastName.length == 0) {
      setLastNameError("Incorrect last name");
      return false;
    }
    return true;
  };

  const validateDate = () => {
    if (!DateTime.fromISO(date).isValid) {
      setDateError("Invalid date");
      return false;
    }
    if (DateTime.fromISO(date).diffNow("years").years > -18) {
      setDateError("You should be minimum 18 years old");
      return false;
    }
    return true;
  };

  const validateCheckbox = () => {
    if (!checkbox) {
      setCheckboxError("Invalid checkbox");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "password") {
      setPassword(value);
      validatePassword();
      setShouldShowPasswordErrors(true);
    }

    if (name === "email") {
      setEmail(value);
    }

    if (name === "firstname") {
      setName(value);
    }

    if (name === "lastname") {
      setLastName(value);
    }

    if (name === "dateofbirth") {
      setDate(value);
    }
    if (name === "checkbox") {
      setCheckbox(checked);
    }
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setDateError("");
    setLastNameError("");
    setNameError("");
    setCheckboxError("");
    setShouldShowPasswordErrors("");
  };

  const validateEmail = () => {
    let parts = email.split("@");
    if (parts[0].length === 0 || parts[1] !== "monterail.com") {
      setEmailError("Invalid email");
      return false;
    }
    return true;
  };

  const stringContainsNumber = (str) => {
    return /\d/.test(str);
  };

  const containsAnyLetter = (str) => {
    return /[a-zA-Z]/.test(str);
  };

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
  };

  const validateFirstStep = () => {
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
  };

  const validateSecondStep = () => {
    clearErrors();
    let isValid = true;

    if (!validateName()) {
      isValid = false;
    }

    if (!validateLastName()) {
      isValid = false;
    }

    if (!validateDate()) {
      isValid = false;
    }
    if (!validateCheckbox()) {
      isValid = false;
    }

    return isValid;
  };

  const clearState = () => {
    clearErrors();
    setDate("");
    setName("");
    setLastName("");
    setCheckbox(false);
    setEmail("");
    setPassword("");
  };

  return {
    handleChange,
    email,
    emailError,
    password,
    passwordError,
    shouldShowPasswordErrors,
    validateFirstStep,
    date,
    name,
    lastName,
    validateSecondStep,
    nameError,
    lastNameError,
    dateError,
    checkbox,
    checkboxError,
    clearState,
  };
};

export default useRegistration;
