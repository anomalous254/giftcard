import React from "react";
import "../styles/Payment.scss";

const Payment: React.FC = () => {
  return (
    <div className="payment">
      <h2>Complete Your Purchase</h2>
      <p>Total: $10.00</p>
      <button>Pay Now</button>
    </div>
  );
};

export default Payment;
