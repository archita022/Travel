import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i);

  const handlePay = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page
    alert('Successful Payment');
    navigate('/thank-you');
  };

  return (
    <div className='paywrapper'>
      <form className="payment-form" onSubmit={handlePay}>
        <h2>Confirm Your Payment</h2>

        <input type="text" placeholder="Owner Name" required />

        <input type="text"  placeholder="Card Number" required />
        <div className="expiry">
          <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)} required>
            <option value="" disabled>Month</option>
            {months.map((month, idx) => (
              <option key={idx} value={month}>{month}</option>
            ))}
          </select>
          <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} required>
            <option value="" disabled>Year</option>
            {years.map((year, idx) => (
              <option key={idx} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <input type="text" className="cvv" placeholder="CVV" required />
        <div className="icons">
          <img src="https://img.icons8.com/color/48/mastercard.png" alt='MasterCard' />
          <img src="https://img.icons8.com/color/48/visa.png" alt='Visa' />
          <img src="https://img.icons8.com/color/48/paypal.png" alt='PayPal' />
        </div>

        <button type="submit">CONFIRM</button>
      </form>
    </div>
  );
};

export default Payment;
