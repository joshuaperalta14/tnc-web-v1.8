import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Settings.css'; // Import CSS for styling

const Settings = () => {
  // State variables for settings
  const [language, setLanguage] = useState('English');
  const [timezone, setTimezone] = useState(new Date());
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [units, setUnits] = useState('Metric');
  const [threshold, setThreshold] = useState(10);
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [notificationFrequency, setNotificationFrequency] = useState('Daily');
  const [eventLogFilter, setEventLogFilter] = useState('Date');
  const [userRole, setUserRole] = useState('Admin');
  const [backupSchedule, setBackupSchedule] = useState('Weekly');
  const [backupLocation, setBackupLocation] = useState('/path/to/backup');
  const [theme, setTheme] = useState('Light');
  const [fontStyle, setFontStyle] = useState('Normal');
  const [fontSize, setFontSize] = useState('Medium');
  const [logo, setLogo] = useState(null);

  // Function to handle saving settings changes
  const handleSaveSettings = () => {
    // Code to save settings changes goes here
    alert('Settings saved successfully!');
  };

  // Function to handle calendar date selection
  const handleDateSelection = (date) => {
    // Update date format based on selected date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setDateFormat('${month}/${day}/${year}');
    // Update timezone with selected date
    setTimezone(date);
  };

  return (
    <div className="settings-background">
    <div className="settings-container">
      <h1>Settings</h1>
      
      {/* General Settings */}
      <div className="section">
        <h2>General Settings</h2>
        <div className="setting">
          <label>Language Preferences:</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            {/* Add more language options as needed */}
          </select>
        </div>
        <div className="setting">
          <label>Select Timezone:</label>
          <Calendar
            onChange={handleDateSelection}
            value={new Date(timezone)}
            selectRange={false}
            showNeighboringMonth={false}
          />
        </div>
        <div className="setting">
          <label>Date and Time Formats:</label>
          <input type="text" value={dateFormat} onChange={(e) => setDateFormat(e.target.value)} />
        </div>
      </div>

      {/* User Profile Settings */}
      <div className="section">
        <h2>User Profile Settings</h2>
        <div className="setting">
          <label>Change Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="setting">
          <label>Update Email Address:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {/* Profile picture/avatar upload */}
      </div>

      {/* Notification Settings */}
      <div className="section">
        <h2>Notification Settings</h2>
        <div className="setting">
          <label>Enable/Disable Email Notifications:</label>
          <input type="checkbox" checked={notificationEnabled} onChange={(e) => setNotificationEnabled(e.target.checked)} />
        </div>
        <div className="setting">
          <label>Notification Frequency:</label>
          <select value={notificationFrequency} onChange={(e) => setNotificationFrequency(e.target.value)}>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            {/* Add more frequency options as needed */}
          </select>
        </div>
      </div>

      {/* Inventory Settings */}
      <div className="section">
        <h2>Inventory Settings</h2>
        <div className="setting">
          <label>Default Currency:</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            {/* Add more currency options as needed */}
          </select>
        </div>
        <div className="setting">
          <label>Units of Measurement:</label>
          <select value={units} onChange={(e) => setUnits(e.target.value)}>
            <option value="Metric">Metric</option>
            <option value="Imperial">Imperial</option>
            {/* Add more units options as needed */}
          </select>
        </div>
        <div className="setting">
          <label>Threshold Alerts for Low Inventory Levels:</label>
          <input type="number" value={threshold} onChange={(e) => setThreshold(parseInt(e.target.value))} />
        </div>
      </div>

      {/* Event Log Settings */}
      <div className="section">
        <h2>Event Log Settings</h2>
        <div className="setting">
          <label>Filter By:</label>
          <select value={eventLogFilter} onChange={(e) => setEventLogFilter(e.target.value)}>
            <option value="Date">Date</option>
            <option value="User">User</option>
            <option value="Event Type">Event Type</option>
            {/* Add more filter options as needed */}
          </select>
        </div>
        {/* Add export log data options */}
      </div>

      {/* Access Control Settings */}
      <div className="section">
        <h2>Access Control Settings</h2>
        {/* Add access control settings options */}
      </div>

      {/* Backup and Restore Settings */}
      <div className="section">
        <h2>Backup and Restore Settings</h2>
        <div className="setting">
          <label>Schedule Automated Backups:</label>
          <select value={backupSchedule} onChange={(e) => setBackupSchedule(e.target.value)}>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            {/* Add more schedule options as needed */}
          </select>
        </div>
        <div className="setting">
          <label>Backup Storage Location:</label>
          <input type="text" value={backupLocation} onChange={(e) => setBackupLocation(e.target.value)} />
        </div>
        {/* Add manual backup and restore options */}
      </div>

      {/* Theme Settings */}
      <div className="section">
        <h2>Theme Settings</h2>
        <div className="setting">
          <label>Choose Website Theme or Color Scheme:</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            {/* Add more theme options as needed */}
          </select>
        </div>
        <div className="setting">
          <label>Customize Font Styles:</label>
          <select value={fontStyle} onChange={(e) => setFontStyle(e.target.value)}>
            <option value="Normal">Normal</option>
            <option value="Italic">Italic</option>
            <option value="Bold">Bold</option>
            {/* Add more font style options as needed */}
          </select>
        </div>
        <div className="setting">
          <label>Customize Font Sizes:</label>
          <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            {/* Add more font size options as needed */}
          </select>
        </div>
        {/* Add upload custom logos or graphics option */}
      </div>

      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
    </div>
  );
};

export default Settings;