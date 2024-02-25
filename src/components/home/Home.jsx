import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '../cards/Cards';
import "./style.css";

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
      const sliderSettings = {
        dots: true, 
        infinite: false,
        speed: 500,
        slidesToShow: Math.min(numCards, 4), 
        slidesToScroll: 1,
       
    };;

   return (
    <div className="home-container">
        <div className="container2">
            <h1>Bienvenido, juanperez@gmail.com</h1>
        </div>
        <div className="slider-container">
            <Slider  {...sliderSettings}>
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
