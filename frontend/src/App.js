import React, { useState } from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para proramadores e encontre <strong>talentos</strong> para sua
          empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Seu e-mail" />

          <button type="submit" className="btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
