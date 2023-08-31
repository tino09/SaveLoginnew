import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleAddItem = () => {
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: itemName }),
    })
      .then(response => response.json())
      .then(data => {
        setItems([...items, data]);
        setItemName('');
      });
  };

  return (
    <div className="App">
      <h1>React MongoDB Integration</h1>
      <div>
        <input
          type="text"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
