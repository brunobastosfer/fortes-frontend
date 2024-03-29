import React from 'react';
import './signupForm.css';
import {v4 as uuidv4} from 'uuid';

function Register({ toggleForm }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = {
      id: uuidv4(),
      email,
      password
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <form className="register-form" onSubmit={handleSignup}>
      <input className="input-register-form" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <input  className="input-register-form" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <button className="button-register-form" type="submit">Cadastrar</button>
      <p className="signup-text">Já possui uma conta? 
      <span onClick={toggleForm}>
        Faça login
      </span>
      </p>
    </form>
  );
}

export default Register;
