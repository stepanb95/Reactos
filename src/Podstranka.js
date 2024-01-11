import React, { useState } from 'react';
import './App.css';

function Podstranka() {
  const [message, setMessage] = useState('');

  const handleHotovoClick = () => {
    setMessage('Seznam byl dokončen');
  };

  return (
    <div className="App">
      <h1>Název obchodu</h1>

      <input type="text" placeholder="Název položky" />
      <input type="number" placeholder="Množství" />

      <button className="tlacitkos" onClick={handleHotovoClick}>
        Hotovo
      </button>
      <p>{message}</p>

      <button className="tlacitkos1">Odebrat</button>
    </div>
  );
}

export default Podstranka;
