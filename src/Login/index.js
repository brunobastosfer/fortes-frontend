import React, { useState } from 'react';
import './login.css';
import Register from '../Register';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

function Login() {
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => {
    setIsRegisterForm(!isRegisterForm);
  }

  const handleSignin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      <Link to={"/"} />
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuário e/ou senha inválidos!",
      });
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <img src="https://www.fortestecnologia.com.br/wp-content/themes/Fortes-ws2022/assets/images/logo_fortes.svg" alt="Logo" className="logo" />
        {
          isRegisterForm 
            ? <Register toggleForm={toggleForm} />
            : 
            <>
              <form className="login-form" onSubmit={handleSignin}>
                <input className="input-login-form" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                  <p>Error</p>
                <input  className="input-login-form" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                  <p>Error</p>
                <button className="button-login-form" type="submit">Login</button>
              </form>
              <p className="lost-account">Esqueci minha senha</p>
              <p className="signup-text">Não possui uma conta? 
                <span onClick={toggleForm}>
                  Cadastre-se.
                </span>
              </p>
            </>
        }
      </div>
    </div>
  );
}

export default Login;
