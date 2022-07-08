import React from 'react';
import { Email } from './Email';
import { Password } from './Password';

export const MainRegisterBox = ({inputs, handleChange}) => {
    return (
        <div className='emailAndPassword'>
            <Email inputs={inputs} handleChange={handleChange} />
            <Password inputs={inputs} handleChange={handleChange}  />
        </div>
    )
}
