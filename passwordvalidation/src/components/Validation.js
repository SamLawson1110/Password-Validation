import React, { useState } from "react";
import validator from 'validator'
 
const Validation = () => {
 
  const [errorMessage, setErrorMessage] = useState('')
 
  const validate = (value) => {
 
    if (validator.isStrongPassword(value, {
      minLength: 10, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('')
    } else {
      setErrorMessage('Password needs to contain at least 1 uppercase letter, lowercase letter, number, special character, and at least 10 characters in total')
    }
  }
 
  return (
    <div style={{
      marginLeft: '200px',
    }}>
      <pre>
        <span>Enter Password: </span><input type="text"
          onChange={(e) => validate(e.target.value)}></input> <br />
        {errorMessage === '' ? null :
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>
            {errorMessage}
        </span>
        }
      </pre>
    </div>
  );
}
 
export default Validation