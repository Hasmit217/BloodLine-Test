

import React, { useState } from 'react';
import firebase from './firebase';
import { useNavigate } from 'react-router-dom';

function App() {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      setMobile(value);
    } else if (name === 'otp') {
      setOtp(value);
    }
  };

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log('Recaptca varified');
      },
      defaultCountry: 'IN',
    });
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = '+91' + mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log('OTP has been sent');
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log('SMS not sent');
      });
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert('User is verified');
        navigate('/DonorDash', { state: { mobile: mobile } });
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <div className="User-login-container" >
      <h1 style={{ color: "#b11717" }}>Login Form</h1>
      <div className='login-form'>
        <form onSubmit={onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input className="loginForm-input" type="number" name="mobile" placeholder="Mobile number" required onChange={handleChange} />
          <button type="submit">Get OTP</button>
        </form>

        {/* <h2>Enter OTP</h2> */}
        <form onSubmit={onSubmitOTP}>
          <input className="loginForm-input" type="number" name="otp" placeholder="OTP Number" required onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
{/* <div className="User-login-container">
                  <h1 style={{ color: "#b11717" }}>Login Form</h1>
                  <div className='login-form'>
                    <form onSubmit={this.onSignInSubmit}>
                      <div id="sign-in-button"></div>
                      <input className="loginForm-input" type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange} />
                      <button type="submit">Get OTP</button>
                    </form>
                    <form onSubmit={this.onSubmitOTP}>
                      <input className="loginForm-input" type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange} />
                      <button onClick={this.onSubmitOTP} type="submit">Login</button>
                    </form>
                  </div>
                </div> */}