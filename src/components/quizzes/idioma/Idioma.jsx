// Idioma.js
import React, { useState } from 'react';
import RadioButton from '../../components/RadioButton';
import "./style.css"

const Idioma = () => {
  const questions = [
    { id: 'question1', title: 'Tienes algun conocimiento del Idioma Ingles?', options: ['Si', 'No'] },
    { id: 'question2', title: 'Estas cursando estudios del idioma ingles actualmente', options: ['Si', 'No'] },
    { id: 'question3', title: 'Conoces las opciones para estudiar ingles que ofrece la BUAZ a traves del Programa de Extension Universitaria de Lenguhas(PEUL) o del Programa Unico de ingles(PUDI)(PACDI)?', options: ['Si', 'No'] },
  ];

  const [answers, setAnswers] = useState(Object.fromEntries(questions.map(q => [q.id, null])));

  const handleRadioButtonChange = (questionId, value) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: value }));
  };

  const handleSubmit = () => {
    // Send answers to the database
    // Adjust the API endpoint and database logic accordingly

    fetch('/api/saveQuizAnswers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className='idioma-container'>
      <h1>Idioma</h1>

      {questions.map(({ id, title, options }) => (
        <div key={id}>
          <h3>{title}</h3>
          {options.map((option, index) => (
            <RadioButton
              key={`${id}_option${index + 1}`}
              name={id}
              id={`${id}_option${index + 1}`}
              value={`option${index + 1}`}
              label={option}
              onChange={() => handleRadioButtonChange(id, `option${index + 1}`)}
            />
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Idioma;
