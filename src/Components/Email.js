import React from "react";

export const Email = ({ email, emailError, handleChange }) => {
  return (
    <div>
      <label className="label">EMAIL</label>
      <input
        id="email"
        type="text"
        name="email"
        className={`input ${emailError !== "" ? "red-border" : ""}`}
        placeholder="Something ending with monterail.com"
        value={email}
        onChange={handleChange}
      />
    </div>
  );
};
