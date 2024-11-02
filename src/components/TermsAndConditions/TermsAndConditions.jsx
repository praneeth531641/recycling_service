import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="terms-container">
            <Button variant="outline-success" onClick={handleBack} className="back-button">
                <FaArrowLeft /> Back
            </Button>
            <h1>Terms and Conditions</h1>
            <p>Please read these terms and conditions carefully before using our services.</p>
            <h2>Acceptance of Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these terms.</p>
            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Your continued use of the services after changes will constitute your acceptance of the new terms.</p>
            <h2>Limitation of Liability</h2>
            <p>We shall not be liable for any indirect or consequential loss arising from the use of our services.</p>
        </div>
    );
};

export default TermsAndConditions;
