import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AuthPage from './components/AuthPage/AuthPage';
import Dashboard from './components/Dashboard/Dashboard';
import FeedbackPage from './components/FeedbackPage/FeedbackPage';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import BookingForm from './components/BookingForm/BookingForm';
import FoodWaste from './components/Wastes/FoodWaste';
import PlantWaste from './components/Wastes/PlantWaste';
import AnimalWaste from './components/Wastes/AnimalWaste';
import Profile from './components/Profile/Profile';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard isAdmin={false} />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/booking" element={<BookingForm />} />
                <Route path="/products/food-waste" element={<FoodWaste />} />
                <Route path="/products/plant-waste" element={<PlantWaste />} />
                <Route path="/products/animal-waste" element={<AnimalWaste />} />
                <Route path="/profile" element={<Profile />} />
                
            </Routes>
        </Router>
    );
};

export default App;
