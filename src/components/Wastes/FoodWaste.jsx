import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import './WasteStyles.css';

const FoodWaste = () => {
    const navigate = useNavigate();

    return (
        <div className="waste-container">
            <Button variant="outline-success" onClick={() => navigate(-1)} className="back-button">
                <FaArrowLeft /> Back
            </Button>
            <h1>Food Waste</h1>
            <p>Food waste recycling helps reduce landfill waste and creates valuable compost for soil.</p>
        </div>
    );
};

export default FoodWaste;
