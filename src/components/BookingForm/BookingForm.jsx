import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './BookingForm.css';

const BookingForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBooking, setDateOfBooking] = useState('');
  const [typeOfWaste, setTypeOfWaste] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      name,
      mobile,
      address,
      dateOfBooking,
      typeOfWaste,
      weight,
    });
  };

  const handleBack = () => {
    navigate('/home'); // Adjust this path as needed
  };

  return (
    <div className="booking-form-container">
      <button onClick={handleBack} className="back-button">
        <FaArrowLeft /> Back
      </button>
      <h2>Booking Details</h2>
      <form onSubmit={handleSubmit} className="booking-form">
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

        <label>
          Date of Booking:
          <input
            type="date"
            value={dateOfBooking}
            onChange={(e) => setDateOfBooking(e.target.value)}
          />
        </label>

        <label>
          Type of Waste:
          <input
            type="text"
            value={typeOfWaste}
            onChange={(e) => setTypeOfWaste(e.target.value)}
          />
        </label>

        <label>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
