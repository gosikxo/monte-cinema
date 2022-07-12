import React, { useState } from "react";

function getErrorState({ errorCode, passwordError, shouldShowPasswordErrors }) {
  if (!shouldShowPasswordErrors) {
    return "neutral";
  }

  if (passwordError.includes(errorCode)) {
    return "red";
  }

  return "green";
}

export const Password = ({
  handleChange,
  password,
  passwordError,
  shouldShowPasswordErrors,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleIsLoading = () => {
    setShowPassword((current) => !current);
  };
  return (
    <div>
      <label className="label">PASSWORD</label>
      <div className="relative">
        <input
          id="password"
          type={`${showPassword === true ? "text" : "password"}`}
          name="password"
          className="input password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        />
        <img
          src="/eye.svg"
          className="absolute"
          alt="eye"
          onClick={toggleIsLoading}
        />
      </div>
      <p
        className={getErrorState({
          errorCode: "Too short",
          passwordError,
          shouldShowPasswordErrors,
        })}
      >
        At least 8 characters
      </p>
      <p
        className={getErrorState({
          errorCode: "No letter",
          passwordError,
          shouldShowPasswordErrors,
        })}
      >
        At least one letter characters
      </p>
      <p
        className={getErrorState({
          errorCode: "No number",
          passwordError,
          shouldShowPasswordErrors,
        })}
      >
        At least one digit
      </p>
    </div>
  );
};
