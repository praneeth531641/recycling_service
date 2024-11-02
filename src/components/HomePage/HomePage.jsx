import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomePage.css';
import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <div className={`App ${theme}`}>
      {/* Menu and Theme Toggle */}
      <div className={`menu ${isDesktop ? 'desktop-menu' : 'mobile-menu'}`}>
        {isDesktop ? (
          <nav className="desktop-nav">
            <Link to="/dashboard">Dashboard</Link>
            <div className="dropdown">
              <button className="dropbtn">Products</button>
              <div className="dropdown-content">
                <Link to="/products/food-waste">Food Waste</Link>
                <Link to="/products/plant-waste">Plant Waste</Link>
                <Link to="/products/animal-waste">Animal Waste</Link>
              </div>
            </div>
            <Link to="/booking">Booking</Link>
            <Link to="/feedback">Feedback</Link>
            <Link to="/profile">Profile</Link> {/* New Profile Link */}
            <Link to="/">Log Out</Link>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
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
                <div className="dropdown">
                  <button className="dropbtn">Products</button>
                  <div className="dropdown-content">
                    <Link to="/products/food-waste">Food Waste</Link>
                    <Link to="/products/plant-waste">Plant Waste</Link>
                    <Link to="/products/animal-waste">Animal Waste</Link>
                  </div>
                </div>
                <Link to="/booking">Booking</Link>
                <Link to="/feedback">Feedback</Link>
                <Link to="/profile">Profile</Link> {/* New Profile Link */}
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="content">
        <Container className="text-center">
          <div className="company-name-section">
            <h1>Recycling Services</h1>
          </div>
          <p>
            "At Recycling Services, we’re dedicated to creating a cleaner, greener planet by making recycling easy, efficient, and accessible. Our mission is to reduce waste, conserve natural resources, and promote sustainable practices for a healthier future."
          </p>

          <Row className="mt-4">
            {[image1, image2, image3].map((img, index) => (
              <Col key={index} md={4} className="d-flex align-items-stretch">
                <Card className="w-100">
                  <Card.Img variant="top" src={img} />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="footer">
        <p>© 2024 Recycling Services. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms and Conditions</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
