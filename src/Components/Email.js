import React from 'react'

export const Email = () => {
    return (
        <div>
            <label className='label'>EMAIL</label>
            <input
                id='email'
                type="text"
                name='email'
                className='input'
                placeholder='Something ending with monterail.com' />
        </div>
    )
}
