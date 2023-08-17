import React, { useState } from 'react';

const PaymentPlatform = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing (replace with actual payment gateway integration)
    alert(`Payment successful! Amount: $${amount}`);
    // Clear form fields after successful payment
    setCardNumber('');
    setExpirationDate('');
    setCVV('');
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h1>Payment Platform</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Expiration Date:</label>
          <input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>
        <div>
          <label>Name on Card:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
};

export default PaymentPlatform;
