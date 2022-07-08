import React from 'react'

export const Password = ({handleChange, inputs}) => {
    return (
        <div>
            <label className='label'>PASSWORD</label>
            <input
                id='password'
                type="text"
                name='password'
                className='input'
                placeholder='Enter your password'
                value={inputs.password}
                onChange={handleChange} />
            <p className={1 === 1 ? "green" : "red"}>At least 8 characters</p>
            <p className={1 === 1 ? "green" : "red"}>At least one letter characters</p>
            <p className={1 === 1 ? "green" : "red"}>At least one digit</p>
        </div>
    )
}
