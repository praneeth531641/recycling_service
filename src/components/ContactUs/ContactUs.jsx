import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="contact-container">
            <Button variant="outline-success" onClick={handleBack} className="back-button">
                <FaArrowLeft /> Back
            </Button>
            <h1>Contact Us</h1>
            <p>If you have any questions or inquiries, please reach out to us!</p>
            <h2>Email</h2>
            <p>info@recyclingservices.com</p>
            <h2>Phone</h2>
            <p>(123) 456-7890</p>
            <h2>Address</h2>
            <p>123 Recycling St, Green City, State, Zip</p>
        </div>
    );
};

export default ContactUs;
