import React from 'react'

export const NameRegisterBox = ({ date, name, lastName, handleChange, lastNameError, nameError, dateError, checkbox, checkboxError }) => {
  console.log({ date, name, lastName, handleChange, lastNameError, nameError, dateError, checkbox })
  return (
    <div>
      <label className='label'>FIRST NAME</label>
      <input
        id='firstname'
        type="text"
        name='firstname'
        className={`input ${nameError !== "" ? "red-border" : ""}`}
        placeholder='e.g. Jessica'
        onChange={handleChange}
        value={name}
      />
      <label className='label'>LAST NAME</label>
      <input
        id='lastname'
        type="text"
        name='lastname'
        className={`input ${lastNameError !== "" ? "red-border" : ""}`}
        placeholder='e.g. Walton'
        onChange={handleChange}
        value={lastName}
      />
      <label className='label'>DATE OF BIRTH</label>
      <input
        id='dateofbirth'
        type="date"
        name='dateofbirth'
        className='input'
        onChange={handleChange}
        value={date}
      />
      <p className={`${dateError !== "" ? "red" : "neutral"}`}>You should be mimium 18 years old</p>
      <div className='checkbox1'>
        <input 
          type='checkbox'
          name="checkbox"
          onChange={handleChange}
          value={checkbox} />
        <p className={`accept ${dateError !== "" ? "red" : "neutral"}`}>I accept <a href="#">Privacy Policy</a></p>
      </div>
    </div>
  )
}
