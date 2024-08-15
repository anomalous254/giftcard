import React, { useState } from "react";
import '../styles/BookPreviewPay.scss'

type GiftCard = {
  id: string;
  title: string;
  message: string;
  image: string;
  color: string;
};

interface BookPreviewPayProps {
  giftCards: GiftCard[];
  onPayment: () => void;
}

const BookPreviewPay: React.FC<BookPreviewPayProps> = ({
  giftCards,
  onPayment,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < giftCards.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="book-preview-pay-container">
      <div className="book">
        {giftCards.map((giftCard, index) => (
          <div
            key={giftCard.id}
            className={`page ${index === currentPage ? "visible" : ""}`}
          >
            <div
              className="giftcard-content"
              style={{ backgroundColor: giftCard.color }}
            >
              <h3>{giftCard.title}</h3>
              <p>{giftCard.message}</p>
              {giftCard.image && <img src={giftCard.image} alt="Gift Card" />}
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === giftCards.length - 1}
        >
          Next
        </button>
      </div>
      <button className="payment-button" onClick={onPayment}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default BookPreviewPay;
