import React from "react";
import '../styles/GiftCardPreview.scss'

type GiftCard = {
  id: string;
  title: string;
  message: string;
  image: string;
  color: string;
};

interface GiftCardPreviewProps {
  giftCard: GiftCard;
}

const GiftCardPreview: React.FC<GiftCardPreviewProps> = ({ giftCard }) => {
  return (
    <div
      className="giftcard-preview"
      style={{ backgroundColor: giftCard.color }}
    >
      <h2>{giftCard.title}</h2>
      <p>{giftCard.message}</p>
      {giftCard.image && <img src={giftCard.image} alt="Gift Card" />}
    </div>
  );
};

export default GiftCardPreview;
