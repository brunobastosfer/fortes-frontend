import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src="https://www.fortestecnologia.com.br/wp-content/themes/Fortes-ws2022/assets/images/logo_fortes.svg" alt="Logo" className="home-logo" />
        <nav>
          <ul>
            <li>Usuários</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Bem-vindo à sua página inicial</h1>
        {/* Outros conteúdos da página */}
      </main>
    </div>
  );
}

export default Home;
