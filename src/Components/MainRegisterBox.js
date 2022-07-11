import React from 'react';
import { Email } from './Email';
import { Password } from './Password';

export const MainRegisterBox = ({password,passwordError, email, emailError, handleChange, shouldShowPasswordErrors}) => {
    return (
        <div className='emailAndPassword' >
            <Email email={email} emailError={emailError}  handleChange={handleChange} />
            <Password shouldShowPasswordErrors={shouldShowPasswordErrors} password={password} passwordError={passwordError} handleChange={handleChange}  />
        </div>
    )
}
