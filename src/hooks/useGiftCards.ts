import { useState } from "react";

type GiftCard = {
  id: string;
  title: string;
  message: string;
  image: string;
  color: string;
};

export const useGiftCards = () => {
  const [giftCards, setGiftCards] = useState<GiftCard[]>([]);

  const addGiftCard = (giftCard: GiftCard) => {
    setGiftCards([...giftCards, giftCard]);
  };

  return {
    giftCards,
    addGiftCard,
  };
};
