import React from 'react';
import { Email } from './Email';
import { Password } from './Password';
import { Button } from './Button';

export const MainRegisterBox = () => {
    return (
        <div className='mainregisterbox'>
            <Email />
            <Password />
            <div className='buttons'>
                <a href='#'>Log in instead</a>
                <Button />
            </div>
        </div>
    )
}
