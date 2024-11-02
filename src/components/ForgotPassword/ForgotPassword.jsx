import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [resetEmail, setResetEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleResetChange = (e) => {
        setResetEmail(e.target.value);
        setError('');
    };

    const handleResetSubmit = (e) => {
        e.preventDefault();
        if (!resetEmail || !validateEmail(resetEmail)) {
            setError('Please enter a valid email address.');
            return;
        }
        console.log('Password reset link sent to:', resetEmail);
        // Here, you would typically send the email to your server for processing
        navigate('/home'); // Navigate back after reset
    };

    const handleBackClick = () => {
        navigate('/'); // Navigate to the login page
    };

    return (
        <Container className="mt-5 auth-container">
            <Card className="shadow">
                <Card.Body>
                    <h2 className="text-center mb-4 text-success">Forgot Password</h2>
                    <Form onSubmit={handleResetSubmit}>
                        <Form.Group controlId="formResetEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="resetEmail"
                                placeholder="Enter your email to reset password" 
                                required 
                                value={resetEmail} 
                                onChange={handleResetChange} 
                                isInvalid={!!error}
                            />
                            {error && <div className="text-danger">{error}</div>}
                        </Form.Group>
                        <Button variant="success" type="submit" className="w-100 mb-3">Send Reset Link</Button>
                    </Form>
                    <Button variant="link" onClick={handleBackClick} className="text-center">Back to Login</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ForgotPassword;
