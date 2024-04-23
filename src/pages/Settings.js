import React, { useState } from 'react';
import '../pages/Settings.css';

const CompanyProfileSettings = () => {
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [industry, setIndustry] = useState('');
  const [foundedYear, setFoundedYear] = useState('');
  
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');

  const handleSaveCompanyProfile = () => {
    alert('Company profile saved successfully!');
  };

  return (
    <div className="settings-background">
    <div className="settings-profile-container">
      <h1>Profile Settings</h1>
      <div className="setting">
        <label className="settings-label">Company Name:</label>
        <input className="settings-input" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Address:</label>
        <input className="settings-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Phone Number:</label>
        <input className="settings-input" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Industry:</label>
        <input className="settings-input" type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Founded Year:</label>
        <input className="settings-input" type="text" value={foundedYear} onChange={(e) => setFoundedYear(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Website:</label>
        <input className="settings-input" type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Email:</label>
        <input className="settings-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="setting">
        <label className="settings-label">Number of Employees:</label>
        <input className="settings-input" type="text" value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)} />
      </div>

      <button className="settings-button" onClick={handleSaveCompanyProfile}>Save Profile Settings</button>
    </div>
    </div>
  );
};

export default CompanyProfileSettings;