import React, { useState } from 'react';
import workprogress from '../../../assets/workprogress.png';
import './style.css';
import { useNavigate } from 'react-router-dom';

const SaludMental = () => {
  const questions = [
    {
      id: 'pregunta63',
      title: 'Pasaste por alguna de las siguientes situaciones durante el aislamiento?',
      options: [
        'Problemas para conciliar el sueño',
        'Comportamientos agresivos',
        'Estar más irritable',
        'Pérdida de interés en actividades que antes solías disfrutar',
        'Pérdida de energía o cansancio excesivo',
        'Sensación de desesperanza hacia el futuro',
        'Actos de autolesión',
        'Ideas de suicidio',
        'Comportamientos alimentarios de riesgo',
        'Todas las anteriores',
      ],
    },
    { id: 'pregunta64', title: '¿Has pasado por alguna situación emocional, evento o momento difícil, personal o familiar en los últimos 6 meses?', options: ['Si', 'No'] },
  ];

  const apiBD = process.env.REACT_APP_API_BD;
  const apiBDSaludMental = process.env.REACT_APP_ADD_SALUD_MENTAL;
  const userId = localStorage.getItem('id');
  const authToken = localStorage.getItem('token');
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(Object.fromEntries(questions.map(q => [q.id, null])));

  const handleCheckboxChange = (questionId, option) => {
    setAnswers(prevAnswers => {
      const currentOptions = prevAnswers[questionId] || [];
      const updatedOptions = currentOptions.includes(option)
        ? currentOptions.filter(item => item !== option)
        : [...currentOptions, option];
      return { ...prevAnswers, [questionId]: updatedOptions };
    });
  };

  const handleRadioChange = (questionId, option) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: option }));
  };

  const convertCheckboxValue = (questionId, option) => {
    return answers[questionId]?.includes(option) ? 'Si' : 'No';
  };

  const convertRadioValue = (questionId) => {
    return answers[questionId] === 'Si' ? 'Si' : 'No';
  };

  const handleSubmit = async () => {
    const formattedAnswers = {
      'userId': userId,
      'pregunta63': questions[0].options.map(option => convertCheckboxValue('pregunta63', option)).join(','),
      'pregunta64': convertRadioValue('pregunta64'),
      // Add more questions as needed
    };
    console.log(formattedAnswers);
    try{
      const response= await fetch(apiBD+apiBDSaludMental,{
        method:'POST',
        headers:{
          'Authorization':`Bearer ${authToken}`,
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          'userId': userId,
          'pregunta63': questions[0].options.map(option => convertCheckboxValue('pregunta63', option)).join(','),
          'pregunta64': convertRadioValue('pregunta64'),
          // Add more questions as needed
        })
      });
      if (response.ok){
        alert('Respuestas guardadas exitosamente')
        navigate('/home')
      }else{
        throw new Error(`Error al guardar las respuestas. ${response.status}`)
      }
    }catch(error){
      console.error("Error al guardar las respuestas",error)
      alert("Error al guardar las respuestas, vuelve a intentarlo")
    }
  };

  return (
    <div className='saludmental-container'>
      <h1>Salud mental</h1>
      {questions.map(({ id, title, options }) => (
        <div key={id}>
          <h3>{title}</h3>
          {options.map((option, index) => (
            <div key={`${id}_option${index + 1}`}>
              {id === 'pregunta64' ? (
                <>
                  <input
                    type='radio'
                    id={`${id}_option${index + 1}`}
                    name={id}
                    value={option}
                    onChange={() => handleRadioChange(id, option)}
                    checked={answers[id] === option}
                  />
                  <label className="SM-label" htmlFor={`${id}_option${index + 1}`}>{option}</label>
                </>
              ) : (
                <>
                  <input
                    type='checkbox'
                    id={`${id}_option${index + 1}`}
                    value={option}
                    onChange={() => handleCheckboxChange(id, option)}
                    checked={answers[id]?.includes(option)}
                  />
                  <label className="SM-label" htmlFor={`${id}_option${index + 1}`}>{option}</label>
                </>
              )}
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SaludMental;
