import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookPreviewPay from "./components/BookPreviewPay";
import GiftCardEditor from "./components/GiftCardEditor";


type GiftCard = {
  id: string;
  title: string;
  message: string;
  image: string;
  color: string;
};

const App: React.FC = () => {
  const [giftCards, setGiftCards] = useState<GiftCard[]>([]);

  const handleSaveGiftCard = (giftCard: GiftCard) => {
    setGiftCards([...giftCards, giftCard]);
  };

  const handlePayment = () => {
    alert("Proceeding to payment...");
    // Implement payment logic here
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Create Gift Card</Link>
          <Link to="/preview-pay">Preview & Pay</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<GiftCardEditor onSave={handleSaveGiftCard} />}
          />
          <Route
            path="/preview-pay"
            element={
              <BookPreviewPay giftCards={giftCards} onPayment={handlePayment} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
