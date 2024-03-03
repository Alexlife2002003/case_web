import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useHistory hook
import "./style.css";

const Cards = ({ title, content, time }) => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        // Implement your logic to start the quiz or navigate to a quiz page
        // For example, navigating to a "/quiz" route
        navigate('/quiz');
    }

    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{time}</p>
            <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
    );
}

export default Cards;
