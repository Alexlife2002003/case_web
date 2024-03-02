import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '../cards/Cards';
import "./home.css";

const Home = () => {
    const cardsData =[
        {title:"Datos generales", content:"content", time:"time"},
        {title:"Incorporación, medios y recursos", content:"content", time:"time"},
        {title:"Área profesional", content:"content", time:"time"},
        {title:"Idioma" ,content:"content" ,time:"time"},
        {title:"Servicios Case", content:"content", time:"time"},
        {title:"Motivos de deserción y abandono escolar", content:"content", time:"time" },
        {title:"Salud mental", content:"content", time:"time"},
        {title:"Conectividad e infraestructura", content:"content", time:"time"},
        {title:"Servicios de la unidad académica", content:"content", time:"time"}
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
            <h1>Bienvenido, juanperez@gmail.com</h1>
        </div>
          
        <h2>Cuestionarios:</h2>
        <div className="slider-container">
        <Slider {...(window.innerWidth > 600 ? settingsForDesktop : settingsForPhone)}>
                {cardsData.map((card, index) => (
                    <Cards key={index} title={card.title} content={card.content} time={card.time} />
                ))}
            </Slider>
        </div>

        <div style={{ height: '100px' }}></div>
    </div>
);

}

export default Home;
