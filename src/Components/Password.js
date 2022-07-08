import React from 'react'

export const Password = () => {
    return (
        <div>
            <label className='label'>PASSWORD</label>
            <input
                id='password'
                type="text"
                name='password'
                className='input'
                placeholder='Enter your password' />
        </div>
    )
}
