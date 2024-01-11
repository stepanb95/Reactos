import React, { useState } from 'react';
import './App.css';

function Add2() {
  const [items, setItems] = useState([]); // Pole pro uchovávání všech položek

  const handleAddItemClick = () => {
    setItems([...items, { name: '', quantity: '', message: '' }]);
  };

  const handleHotovoClick = (index) => {
    const newItems = [...items];
    newItems[index].message = 'Hotovo';
    setItems(newItems);
  };

  const handleRemoveClick = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      {items.map((item, index) => (
        <div className="App" key={index}>
          <input
            type="text"
            placeholder="Název položky"
            value={item.name}
            onChange={(e) => {
              const newItems = [...items];
              newItems[index].name = e.target.value;
              setItems(newItems);
            }}
          />

          <input
            type="number"
            placeholder="Množství"
            value={item.quantity}
            onChange={(e) => {
              const newItems = [...items];
              newItems[index].quantity = e.target.value;
              setItems(newItems);
            }}
          />

          <button className="tlacitkos" onClick={() => handleHotovoClick(index)}>
            Hotovo
          </button>
          <p>{item.message}</p>

          <button className="tlacitkos1" onClick={() => handleRemoveClick(index)}>
            Odebrat
          </button>
        </div>
      ))}

      <center>
        <button className="tlacitko2" type="button" onClick={handleAddItemClick}>
          Přidat novou položku
        </button>
      </center>
    </>
  );
}

export default Add2;
