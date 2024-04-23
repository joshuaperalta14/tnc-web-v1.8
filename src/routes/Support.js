import React from 'react';
import './Support.css';
import { Link } from 'react-router-dom';

class Support extends React.Component {
  render() {
    return (
      <div className="support-background">
        <div className="support-wrapper">
          <div className="support-app">
            <h1>How can we help you?</h1>
            <div className="card" onClick={() => alert('Clicked Card 1')}>
            <p>Account Settings</p>
            </div>
            <div className="card" onClick={() => alert('Clicked Card 2')}>
            <p>Password Reset</p>
            </div>
            <div className="card" onClick={() => alert('Clicked Card 3')}>
            <p>Contact</p>
            </div>
            <div>
            <h3 style={{ marginTop: '30px'}}>
            <Link to="/" className="support-home">↩&nbsp;Back to Home</Link>
            </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
