import React, { useState } from 'react';
import { Container, Tab, Tabs, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; 

const AuthPage = () => {
    const [key, setKey] = useState('login');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); 

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return re.test(password);
    };

    const validateName = (name) => {
        const re = /^[a-zA-Z0-9\s]+$/;
        return re.test(name);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (key === 'register') {
            if (!formData.name || !validateName(formData.name)) {
                newErrors.name = 'Name must be alphanumeric';
            }
        }

        if (!formData.email || !validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.password || !validatePassword(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number';
        }

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
        } else {
            console.log('Form submitted successfully:', formData);
            navigate('/home'); 
            setFormData({
                name: '',
                email: '',
                password: ''
            });
        }
    };

    return (
        <Container className="mt-5 auth-container">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="shadow">
                        <Card.Body>
                            <h2 className="text-center mb-4 text-success">Recycling Services App</h2>
                            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                                <Tab eventKey="login" title="Login">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formEmail" className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                name="email"
                                                placeholder="Enter email" 
                                                required 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                                isInvalid={!!errors.email}
                                            />
                                            {errors.email && <div className="text-danger">{errors.email}</div>}
                                        </Form.Group>
                                        <Form.Group controlId="formPassword" className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                name="password"
                                                placeholder="Password" 
                                                required 
                                                value={formData.password} 
                                                onChange={handleChange} 
                                                isInvalid={!!errors.password}
                                            />
                                            {errors.password && <div className="text-danger">{errors.password}</div>}
                                        </Form.Group>
                                        <Button variant="success" type="submit" className="w-100 mb-3">Login</Button>
                                    </Form>
                                </Tab>
                                <Tab eventKey="register" title="Register">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formName" className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="name"
                                                placeholder="Enter your name" 
                                                required 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                isInvalid={!!errors.name}
                                            />
                                            {errors.name && <div className="text-danger">{errors.name}</div>}
                                        </Form.Group>
                                        <Form.Group controlId="formEmail" className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                name="email"
                                                placeholder="Enter email" 
                                                required 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                                isInvalid={!!errors.email}
                                            />
                                            {errors.email && <div className="text-danger">{errors.email}</div>}
                                        </Form.Group>
                                        <Form.Group controlId="formPassword" className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                name="password"
                                                placeholder="Password" 
                                                required 
                                                value={formData.password} 
                                                onChange={handleChange} 
                                                isInvalid={!!errors.password}
                                            />
                                            {errors.password && <div className="text-danger">{errors.password}</div>}
                                        </Form.Group>
                                        <Button variant="success" type="submit" className="w-100 mb-3">Register</Button>
                                    </Form>
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AuthPage;
