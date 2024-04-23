import React, { useState } from 'react';
import './Inbox.css'; // Import CSS for styling

const Inbox = () => {
  const [emails, setEmails] = useState([
    { id: 1, sender: 'John Doe', subject: 'Meeting Reminder', body: 'Don\'t forget about the meeting tomorrow!', attachments: ['file1.pdf', 'image.jpg'] },
    { id: 2, sender: 'Jane Smith', subject: 'Project Update', body: 'Here\'s the latest update on our project progress.', attachments: ['presentation.pptx'] },
    // Add more email objects as needed
  ]);

  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="inbox-container">
      <div className="inbox-sidebar">
        {/* Sidebar content (e.g., labels, folders) */}
      </div>
      <div className="inbox-content">
        <div className="inbox-email-list">
          <div className="inbox-header">
            <h1>Inbox</h1>
            <p>Welcome to your inbox. Here are your latest messages:</p>
          </div>
          {emails.map((email) => (
            <div
              key={email.id}
              className={`inbox-email ${selectedEmail && selectedEmail.id === email.id ? 'selected' : ''}`}
              onClick={() => handleEmailClick(email)}
            >
              <div className="inbox-email-info">{email.sender}</div>
              <div className="inbox-email-info">{email.subject}</div>
              <div className="inbox-email-body">{email.body}</div>
            </div>
          ))}
        </div>
        <div className="inbox-email-preview">
          {selectedEmail && (
            <div className="email-preview-container">
              <div className="email-preview-header">
                <h2>{selectedEmail.subject}</h2>
                <div className="email-sender">{selectedEmail.sender}</div>
              </div>
              <div className="email-preview-body">
                <div>{selectedEmail.body}</div>
                {selectedEmail.attachments && (
                  <div>
                    <p>Attachments:</p>
                    <ul>
                      {selectedEmail.attachments.map((attachment, index) => (
                        <li key={index}>{attachment}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className="reply-button">Reply</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;