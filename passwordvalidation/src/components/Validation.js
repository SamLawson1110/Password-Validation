import React, { useState } from "react";
import validator from 'validator'
import TextField from '@mui/material/TextField';
 
const Validation = () => {
 
  const [errorMessage, setErrorMessage] = useState('')
 
  const validate = (value) => {
 
    if (validator.isStrongPassword(value, {
      minLength: 10, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('')
    } else {//change message to be less wordy
      setErrorMessage('Password needs to contain at least 1 uppercase letter, lowercase letter, number, special character, and at least 10 characters in total')
    }
  }
 
  return (
    <div style={{
      marginLeft: '200px', marginRight: '200px'
    }}>
      <pre>
        <TextField 
        name="password"
        fullWidth
        id="password"
        label="Enter Password"
          onChange={(e) => validate(e.target.value)}/><br />
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