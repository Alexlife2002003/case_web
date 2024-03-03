import logo from './logo.svg';
import LoginPage from './components/login/LoginPage';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Header from './components/header/Header'
import  DatosGenerales  from './components/quizzes/DatosGenerales/DatosGenerales';
import Incorporacion from './components/quizzes/incorporacion/Incorporacion';
import AreaProfesional from './components/quizzes/areaProfesional/AreaProfesional';
import Idioma from './components/quizzes/idioma/Idioma';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AbandonoEscolar from './components/quizzes/abandonoEscolar/AbandonoEscolar';
import SaludMental from './components/quizzes/saludMental/SaludMental';
import ServiciosCase from './components/quizzes/serviciosCase/ServiciosCase';
import Conectividad from './components/quizzes/conectividad/Conectividad';
import UnidadAcademica from './components/quizzes/unidadAcademica/UnidadAcademica';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/quiz/1" element={<DatosGenerales />} />
        <Route path="/quiz/2" element={<Incorporacion />} />
        <Route path="/quiz/3" element={<AreaProfesional />} />
        <Route path="/quiz/4" element={<Idioma />} />
        <Route path="/quiz/5" element={<ServiciosCase />} />
        <Route path="/quiz/6" element={<AbandonoEscolar />} />
        <Route path="/quiz/7" element={<SaludMental />} />
        <Route path="/quiz/8" element={<Conectividad />} />
        <Route path="/quiz/9" element={<UnidadAcademica />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;