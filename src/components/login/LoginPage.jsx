import React, { useState } from 'react';
import './style.css';

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const entrar =() =>{
    if(hasAccess){
        
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add your form submission logic here if needed
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
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <input type="password" placeholder='Confirm password' />
              <button type="button" >Register</button>
              <p className="message">Already have an account? <a href="#" onClick={toggleForm}>Login</a></p>
            </div>
          ) : (
            <><h2>Hola nuevamente</h2>
            <div className="login-form">
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <button type="button" onClick={entrar} >Login</button>
              <p className="message">Don't have an account? <a href="#" onClick={toggleForm}>Register now</a></p>
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
