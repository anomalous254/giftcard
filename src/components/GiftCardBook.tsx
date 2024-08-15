import React from "react";
import GiftCardPreview from "./GiftCardPreview";
import '../styles/GiftCardBook.scss'

type GiftCard = {
  id: string;
  title: string;
  message: string;
  image: string;
  color: string;
};

interface GiftCardBookProps {
  giftCards: GiftCard[];
}

const GiftCardBook: React.FC<GiftCardBookProps> = ({ giftCards }) => {
  return (
    <div className="giftcard-book">
      {giftCards.map((giftCard) => (
        <GiftCardPreview key={giftCard.id} giftCard={giftCard} />
      ))}
    </div>
  );
};

export default GiftCardBook;
