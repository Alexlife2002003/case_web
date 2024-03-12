// Idioma.js
import React, { useState } from 'react';
import RadioButton from '../../components/RadioButton';
import "./style.css"
import { useNavigate } from 'react-router-dom';

const Idioma = () => {
  const questions = [
    { id: 'pregunta42', title: 'Tienes algun conocimiento del Idioma Ingles?', options: ['Si', 'No'] },
    { id: 'pregunta43', title: 'Estas cursando estudios del idioma ingles actualmente', options: ['Si', 'No'] },
    { id: 'pregunta44', title: 'Conoces las opciones para estudiar ingles que ofrece la BUAZ a traves del Programa de Extension Universitaria de Lenguhas(PEUL) o del Programa Unico de ingles(PUDI)(PACDI)?', options: ['Si', 'No'] },
  ];

  const apiBD = process.env.REACT_APP_API_BD;
  const apiBDIdioma = process.env.REACT_APP_ADD_IDIOMA;
  const userId = localStorage.getItem('id');
  const authToken= localStorage.getItem('token');
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(Object.fromEntries(questions.map(q => [q.id, null])));

  const handleRadioButtonChange = (questionId, value) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: value }));
  };

  const handleSubmit = async () => {
    try{
      const response = await fetch(apiBD + apiBDIdioma, {
        method: 'POST',
        headers: {
          'Authorization':`Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'userId':userId,'pregunta42':answers['pregunta42'],'pregunta43':answers['pregunta43'],'pregunta44':answers['pregunta44']}),
      });
        if(response.ok){
          alert('Respuestas guardadas exitosamente')
          navigate('/home');
        }else{
          throw new Error(`Error al guardar las respuestas. ${response.status}`)
        }
    }catch(error){
      console.error("Error al guardar las respuestas",error)
      alert("Error al guardar las respuestas, vuelve a intentarlo")
    }
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
              onChange={() => handleRadioButtonChange(id, option)}
            />
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Idioma;
