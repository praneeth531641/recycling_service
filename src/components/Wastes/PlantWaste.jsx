import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import './WasteStyles.css';

const PlantWaste = () => {
    const navigate = useNavigate();

    return (
        <div className="waste-container">
            <Button variant="outline-success" onClick={() => navigate(-1)} className="back-button">
                <FaArrowLeft /> Back
            </Button>
            <h1>Plant Waste</h1>
            <p>Plant waste recycling turns green waste into nutrient-rich compost and biofuel.</p>
        </div>
    );
};

export default PlantWaste;
