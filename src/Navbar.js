import React, { useState } from 'react';
import Modal from 'react-modal';
import './Navbar.css';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState(['nekolas', 'strom']); 

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setUsername('');
  };

  const handleAddUser = () => {
    if (username.trim() !== '') {
      setUsers([...users, username.trim()]);
      setUsername('');
    }
  };

  return (
    <nav className={`navbar `}>
      <div className="flags">
        <img src="https://www.vlajky.eu/vlajky/846/cz.jpg" alt="Česká vlajka" />
        <img src="https://www.libea.cz/wp-content/uploads/2018/12/Velk%C3%A1-Brit%C3%A1nie.jpg" alt="Britská vlajka" />
      </div>
      <div className="logo">Přehled nákupních seznamů</div>
      <div className="right-section">
        <button className="small-button" onClick={openModal}>Uživatelé</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: '50%', 
              margin: 'auto',
            },
          }}
        >
          <h2>Přidat uživatele</h2>
          <label htmlFor="username">Uživatelské jméno:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleAddUser}>Přidat</button>

          <h2>Seznam uživatelů</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>

          <button onClick={closeModal}>Zavřít</button>
        </Modal>
      </div>
      <div className="dark-mode">
        <input
          type="checkbox"
          id="dark-mode-switch"
        />
        <label htmlFor="dark-mode-switch">Dark mode</label>
      </div>
    </nav>
  );
};

export default Navbar;
