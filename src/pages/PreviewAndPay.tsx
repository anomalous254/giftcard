import React from "react";
import { useLocation } from "react-router-dom";
import GiftCardPreview from "../components/GiftCardPreview";
import Payment from "../components/GiftCardBook";

const PreviewAndPay: React.FC = () => {
  const location = useLocation();
  const { photo, text, font, color, size } = location.state || {};

  return (
    <div>
      <GiftCardPreview
        photo={photo}
        text={text}
        font={font}
        color={color}
        size={size}
      />
      <Payment />
    </div>
  );
};

export default PreviewAndPay;
