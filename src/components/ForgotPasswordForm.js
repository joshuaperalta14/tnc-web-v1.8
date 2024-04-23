import React, { useState } from 'react';
import './ForgotPasswordForm.css';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot password email sent to: ${email}');
    setEmail('');
  };

  return (
    <div className='forgotpassword-background'>
    <div className='forgotpassword-wrapper'>
      <form onSubmit={handleSubmit} >
            <h2>Forgot Password?</h2>
            <h4>Enter your email and we'll try to reset your password</h4>
            <div className="input-box">
                <input type="email" placeholder='Email' required value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </div>

            <Link to="/updatepassword"> 
              <button type="submit">Continue</button>
            </Link>

            <div className="forgotpassword-form-group">
                    <Link to="/login" className="left-link"><strong>↩&nbsp;Back to Login</strong></Link>
                    <Link to="/signup" className="right-link"><strong>Register Account</strong></Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default ForgotPasswordForm;
