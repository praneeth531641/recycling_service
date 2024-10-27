import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AuthPage from './components/AuthPage/AuthPage';
import Dashboard from './components/Dashboard/Dashboard';
import FeedbackPage from './components/FeedbackPage/FeedbackPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard isAdmin={false} />} />
                <Route path="/feedback" element={<FeedbackPage />} />
            </Routes>
        </Router>
    );
};

export default App;
