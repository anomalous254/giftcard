import React from "react";
import "../styles/GiftCardPreview.scss";

interface GiftCardPreviewProps {
  photo: File | null;
  text: string;
  font: string;
  color: string;
  size: number;
}

const GiftCardPreview: React.FC<GiftCardPreviewProps> = ({
  photo,
  text,
  font,
  color,
  size,
}) => {
  const photoUrl = photo ? URL.createObjectURL(photo) : "";

  return (
    <div className="gift-card-preview">
      {photo && <img src={photoUrl} alt="Gift Card" />}
      <p style={{ fontFamily: font, color: color, fontSize: `${size}px` }}>
        {text}
      </p>
    </div>
  );
};

export default GiftCardPreview;
