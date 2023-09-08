import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';

// src/stripe.js
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

export default stripePromise;

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

  const DeleteItem = () => {
    const [itemId, setItemId] = useState('');
    const [message, setMessage] = useState('');
  
    const handleDelete = async () => {
      try {
        const response = await axios.delete(`/api/items/${itemId}`);
        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
        setMessage('Error deleting item');
      }
    };

  const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const Checkout = () => {
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);

  const handleSuccessfulPayment = () => {
    setPaymentSuccessful(true);
  
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

      <div>
      <h2>Delete Item</h2>
      <input
        type="text"
        placeholder="Item ID"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
    </div>

    </div>
  );
}

export default App;
