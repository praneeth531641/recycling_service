import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import { FaArrowLeft } from 'react-icons/fa'; 
import './Dashboard.css'; 

const Dashboard = ({ isAdmin }) => {
    const navigate = useNavigate(); 

    const handleBack = () => {
        navigate('/home'); 
    };

    return (
        <Container className="dashboard-container">
            <Button variant="outline-success" onClick={handleBack} className="mb-3">
                <FaArrowLeft /> Back
            </Button>
            <Card className="mb-3">
                <Card.Body>
                    <h1 className="text-center">{!isAdmin ? 'Administrator Dashboard' : 'User Dashboard'}</h1>
                    <div>
                        {!isAdmin ? (
                            <div>
                                <h2>Admin Overview</h2>
                                <p>Welcome to the Administrator Dashboard. Here you can manage users, view statistics, and oversee system performance.</p>
                                <ul>
                                    <li>View User Feedback</li>
                                    <li>Manage User Accounts</li>
                                    <li>Access System Reports</li>
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <h2>User Overview</h2>
                                <p>Welcome to the User Dashboard. Here you can provide feedback, view your activity, and manage your profile settings.</p>
                                <ul>
                                    <li>Provide Feedback</li>
                                    <li>View Activity History</li>
                                    <li>Update Profile Settings</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Dashboard;
