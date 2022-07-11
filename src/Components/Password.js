import React from 'react'

function getErrorState({errorCode, passwordError, shouldShowPasswordErrors}) {
    if (!shouldShowPasswordErrors) {
        return "neutral";
    }

    if (passwordError.includes(errorCode)) {
        return "red";
    }

    return "green";
}

export const Password = ({handleChange, password, passwordError, shouldShowPasswordErrors}) => {
    return (
        <div>
            <label className='label'>PASSWORD</label>
            <input
                id='password'
                type="password"
                name='password'
                className='input password'
                placeholder='Enter your password'
                value={password}
                onChange={handleChange} />
            <p className={getErrorState({errorCode:"Too short", passwordError, shouldShowPasswordErrors} )}>At least 8 characters</p>
            <p className={getErrorState({errorCode:"No letter", passwordError, shouldShowPasswordErrors})}>At least one letter characters</p>
            <p className={getErrorState({errorCode:"No number", passwordError, shouldShowPasswordErrors})}>At least one digit</p>
        </div>
    )
}
