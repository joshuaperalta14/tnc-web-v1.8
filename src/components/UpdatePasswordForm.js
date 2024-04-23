import React, { useState } from 'react';
import './UpdatePasswordForm.css';
import { Link } from 'react-router-dom';

const UpdatePasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle password update submission
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='updatepassword-background'>
      <div className='updatepassword-wrapper'>
        <form onSubmit={handleSubmit} >
          <h2>Update Password</h2>
          <h4>Enter your new password and confirm the password</h4>
          <div className="input-box">
            <input type="password" placeholder='New password' required value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Re-type new password' required value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

          <button type="submit">Continue</button>

          <div className="updatepassword-form-group">
            <Link to="/forgotpassword" className="form-link">↩&nbsp;Go back</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdatePasswordForm;
