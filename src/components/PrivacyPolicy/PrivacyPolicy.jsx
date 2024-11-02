import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/home'); // Adjust this path as needed
    };

    return (
        <div className="policy-container">
            <button onClick={handleBack} className="back-button">
                <FaArrowLeft /> Back
            </button>
            <h1>Privacy Policy</h1>
            <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.</p>
            <h2>Information Collection</h2>
            <p>We may collect personal information from you when you visit our site, place an order, subscribe to our newsletter, or interact with our services.</p>
            <h2>Use of Information</h2>
            <p>Your information helps us improve our services and provides you with a better experience.</p>
            <h2>Data Protection</h2>
            <p>We implement various security measures to maintain the safety of your personal information.</p>
        </div>
    );
};

export default PrivacyPolicy;
