import React from 'react';
import { Email } from './Email';
import { Password } from './Password';

export const MainRegisterBox = () => {
    return (
        <div className='emailAndPassword'>
            <Email />
            <Password />
        </div>
    )
}
