import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import './FeedbackPage.css'; 

const FeedbackPage = () => {
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); 
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email || !validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.feedback) {
            newErrors.feedback = 'Feedback is required';
        }

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
        } else {
            
            console.log('Feedback submitted successfully:', formData);
            
            navigate('/home'); 
        }
    };

    const handleBack = () => {
        navigate('/home'); 
    };

    return (
        <Container className="feedback-container">
            <h1>Feedback</h1>
            <Button variant="outline-success" onClick={handleBack} className="mb-3">
                <FaArrowLeft /> Back
            </Button>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name"
                                placeholder="Enter your name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                isInvalid={!!errors.name}
                            />
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email"
                                placeholder="Enter email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                isInvalid={!!errors.email}
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </Form.Group>
                        <Form.Group controlId="formFeedback">
                            <Form.Label>Feedback/Issue Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                name="feedback"
                                value={formData.feedback} 
                                onChange={handleChange} 
                                isInvalid={!!errors.feedback}
                            />
                            {errors.feedback && <div className="text-danger">{errors.feedback}</div>}
                        </Form.Group>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FeedbackPage;
