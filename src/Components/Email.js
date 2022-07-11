import React from 'react'

export const Email = ({email, emailError, handleChange}) => {
    return (
        <div>
            <label className='label'>EMAIL</label>
            <input
                id='email'
                type="text"
                name='email'
                className='input'
                placeholder='Something ending with monterail.com'
                value={email}
                onChange={handleChange} />
                <div>{emailError}</div>
        </div>
    )
}
