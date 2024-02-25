import logo from './logo.svg';
import LoginPage from './components/login/LoginPage';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Header from './components/header/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
