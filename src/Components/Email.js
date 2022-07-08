import React from 'react'

export const Email = ({inputs, handleChange}) => {
    return (
        <div>
            <label className='label'>EMAIL</label>
            <input
                id='email'
                type="text"
                name='email'
                className='input'
                placeholder='Something ending with monterail.com'
                value={inputs.email}
                onChange={handleChange} />
                <div>{inputs.emailError}</div>
        </div>
    )
}
