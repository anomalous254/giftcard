import React, { useState } from "react";
import '../styles/GiftCardEditor.scss'

type GiftCard = {
  id: string;
  title: string;
  message: string;
  image: string;
  color: string;
};

interface GiftCardEditorProps {
  onSave: (giftCard: GiftCard) => void;
}

const GiftCardEditor: React.FC<GiftCardEditorProps> = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleSave = () => {
    const newGiftCard: GiftCard = {
      id: Date.now().toString(),
      title,
      message,
      image,
      color,
    };
    onSave(newGiftCard);
  };

  return (
    <div className="giftcard-editor">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(URL.createObjectURL(e.target.files![0]))}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleSave}>Save Gift Card</button>
    </div>
  );
};

export default GiftCardEditor;
