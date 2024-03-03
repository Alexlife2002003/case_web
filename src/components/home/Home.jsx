import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '../cards/Cards';
import "./home.css";

const Home = () => {
    const cardsData =[
        {title:"Datos generales", content:"Comparte información básica como tu semestre, matrícula, nombre, y género, con esto nos ayudas a conocerte mejor", time:"1 min", quizid:1},
        {title:"Incorporación, medios y recursos", content:"Ayudanos a descubrir cómo llegaste a la licenciatura, la importancia de las actividades escolares en tu familia y tus recursos para estudiar", time:"2 min", quizid:2},
        {title:"Área profesional", content:"Hablemos de tu experiencia académica. Desde el enfoque de aprendizaje hasta tu percepción sobre la carrera.", time:"5 min", quizid:3},
        {title:"Idioma" ,content:"Cuéntanos sobre tu conocimiento de inglés y la posibilidad de cursar estudios en este idioma." ,time:"1 min", quizid:4},
        {title:"Servicios Case", content:"Descubre el Centro de Aprendizaje y Servicios Estudiantiles (CASE). ¿Ya conoces los servicios que ofrecemos? Comparte tu experiencia y necesidades", time:"1 min", quizid:5},
        {title:"Motivos de deserción y abandono escolar", content:"Explora posibles motivos de abandono escolar y dantos tu perspectiva", time:"2 min", quizid:6 },
        {title:"Salud mental", content:"Nos importa tu bienestar emocional. Exploraomos diversas situaciones emocionales y si has experimentaado dificultades. Tu honestidad nos ayuda abordar posibles desafíos emocionales.", time:"1 min", quizid:7},
        {title:"Conectividad e infraestructura", content:"Ayudanos a evaluar el servicio de internet, las instalaciones, entre otros. Esto nos ayuda a mejorar la conectividad y comodidad en la universidad.", time:"1 min", quizid:8},
        {title:"Servicios de la unidad académica", content:"Aquí hablamos de la unidad académica. Desde el mobiliario hasta la calidad de la planta docente. Con el fin de mejorar la calidad general de los servicios educativos.", time:"2 min", quizid:9}
    ]
    const numCards=cardsData.length;
    const settingsForDesktop = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: Math.min(numCards, 4),
        slidesToScroll: 1,
    };

    const settingsForPhone = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1, // Display only one slide for phone
        slidesToScroll: 1,
        gap:30,
    };

   return (
    <div className="home-container">
        <div className="container2">
            <h1 className='h1-bienvenido'>Bienvenido, juanperez@gmail.com</h1>
        </div>
          
        <h2>Cuestionarios:</h2>
        <div className="slider-container">
        <Slider {...(window.innerWidth > 600 ? settingsForDesktop : settingsForPhone)}>
                {cardsData.map((card, index) => (
                    <Cards key={index} title={card.title} content={card.content} time={card.time} quizId={card.quizid} />
                ))}
            </Slider>
        </div>

        <div style={{ height: '100px' }}></div>
    </div>
);

}

export default Home;
