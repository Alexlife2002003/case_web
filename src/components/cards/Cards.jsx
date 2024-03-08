import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
import { IoTimeOutline } from "react-icons/io5";

const Cards = ({ title, content, time, quizId }) => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate(`/quiz/${quizId}`);
    }

    return (
        <div className="card" onClick={handleStartQuiz}>
            <div className="card-content">
                <h3 className='card-h3'>{title}</h3>
                <p className='card-content'>{content}</p>
                <div className="time">
                <IoTimeOutline />  {time}</div>
            </div>
            
           {/*  <button onClick={handleStartQuiz}>Start Quiz</button> */}
        </div>
    );
}

export default Cards;


