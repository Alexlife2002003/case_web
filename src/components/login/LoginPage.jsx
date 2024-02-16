import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const apiBD = process.env.REACT_APP_API_BD;
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  useEffect(() => {
    if (hasAccess) {
      navigate('/home');
    }
  }, [hasAccess, navigate]);

  const loginUser = async () => {
    try {

      const response = await fetch(apiBD + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username': email, 'password': password, }),
        // body: jsonEncode({'correo': correo, 'password': password}),
      });
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('id', responseData.userId);
        localStorage.setItem('token', responseData.token);
        alert('Inicio de sesion exitoso!');
        setHasAccess(true);
      } else {
        throw new Error(`Inicio de session fallido. ${response.status}`);
      }
    } catch (error) {
      console.error('Inicio de sesion fallido, vuelve a intentarlo.', error);
      alert('Inicio fallido, vuelve a intentarlo.');
    }
  };


  const registerUser = async () => {
    try {
      const response = await fetch(apiBD + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'correo': email, 'password': password, }),
        // body: jsonEncode({'correo': correo, 'password': password}),
      });

      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('id', responseData.userId);
        localStorage.setItem('token', responseData.token);
        alert('Registro exitoso!');
        setHasAccess(true);
      } else {
        throw new Error(`Registro fallido. ${response.status}`);
      }
    } catch (error) {
      console.error('Registro fallido, vuelve a intentarlo.', error);
      alert('Registro fallido, vuelve a intentarlo.');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isRegister) {
      await registerUser();
    } else {
      await loginUser();
    }
  };

  return (
    <div className="userdiv">
      <div className="login-page">
        <div className={`card ${isRegister ? 'flipped' : ''}`}>
          <div className="img">
            <img src="https://case.uaz.edu.mx/wp-content/uploads/2021/01/CASE-INFO-768x404.jpg" alt="" />
          </div>
          <div className="form">
            {isRegister ? (
              <div className="register-form">
                <h2>Hagamos una cuenta para ti</h2>
                <form onSubmit={handleFormSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button type="submit">Register</button>
                </form>
                <p className="message">
                  Already have an account? <a href="#" onClick={toggleForm}>Login</a>
                </p>
              </div>
            ) : (
              <>
                <h2>Hola nuevamente</h2>
                <div className="login-form">
                  <form onSubmit={handleFormSubmit}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                  </form>
                  <p className="message">
                    Don't have an account? <a href="#" onClick={toggleForm}>Register now</a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
