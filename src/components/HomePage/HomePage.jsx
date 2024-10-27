import React, { useState, useEffect } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className="App">
            <div className={`menu ${isDesktop ? 'desktop-menu' : 'mobile-menu'}`}>
                {isDesktop ? (
                    <nav className="desktop-nav">
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/feedback">Feedback</Link>
                        <Link to="/">Log Out</Link>
                    </nav>
                ) : (
                    <>
                        <button className="hamburger" onClick={toggleMenu}>
                            <FaBars />
                        </button>
                        {menuOpen && (
                            <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
                                <Link to="/home">Home</Link>
                                <Link to="/dashboard">Dashboard</Link>
                                <Link to="/feedback">Feedback</Link>
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className="content">
                <Container className="text-center">
                    <Card style={{ backgroundColor: 'white', color: 'green' }}>
                        <Card.Body>
                            <Card.Title>Welcome to Our Recycling Services Application</Card.Title>
                            <Card.Text>Recycling Services</Card.Text>
                            <Button variant="success">Get Started</Button>
                            <Button variant="outline-success" className="ml-2">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </div>

            <div className="footer">
                <p>© 2024 Recycling Services. All rights reserved.</p>
            </div>
        </div>
    );
};

export default HomePage;
