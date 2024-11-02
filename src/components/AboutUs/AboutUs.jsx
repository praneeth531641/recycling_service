import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="about-container">
            <Button variant="outline-success" onClick={handleBack} className="back-button">
                <FaArrowLeft /> Back
            </Button>
            <h1>About Us</h1>
            <p>At Recycling Services, we are committed to promoting sustainability and protecting the environment.</p>
            <h2>Our Mission</h2>
            <p>We aim to reduce waste and increase recycling rates through community engagement and education.</p>
            <h2>Our Vision</h2>
            <p>A world where recycling is second nature and waste is minimized.</p>
            <h2>Our Team</h2>
            <p>We have a passionate team dedicated to making a difference in our community.</p>
        </div>
    );
};

export default AboutUs;
