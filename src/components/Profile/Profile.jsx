import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Profile.css'; // CSS file for styling

const Profile = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('John Doe'); // Placeholder for existing user name
  const [mobile, setMobile] = useState(''); // Placeholder for existing mobile number
  const [address, setAddress] = useState(''); // Placeholder for existing address

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', {
      name,
      mobile,
      address,
    });
    // Add logic to save changes
  };

  const handleBack = () => {
    navigate('/home'); // Navigate back to the home page
  };

  return (
    <div className="profile-container">
      <button onClick={handleBack} className="back-button">
        <FaArrowLeft /> Back
      </button>
      <h2>Profile Details</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Mobile:
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </label>

        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
