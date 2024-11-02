import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import './WasteStyles.css';

const AnimalWaste = () => {
    const navigate = useNavigate();

    return (
        <div className="waste-container">
            <Button variant="outline-success" onClick={() => navigate(-1)} className="back-button">
                <FaArrowLeft /> Back
            </Button>
            <h1>Animal Waste</h1>
            <p>Animal waste recycling is crucial for environmental management and agricultural use.</p>
        </div>
    );
};

export default AnimalWaste;
