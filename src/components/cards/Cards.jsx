
import React from 'react';
import "./style.css";

const Cards = ({ title, content,time }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{time}</p>
        </div>
    );
}

export default Cards;
