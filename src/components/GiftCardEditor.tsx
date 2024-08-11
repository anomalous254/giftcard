import React, { useState } from "react";
import "../styles/GiftCardEditor.scss";
import GiftCardPreview from "./GiftCardPreview";

const GiftCardEditor: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [text, setText] = useState<string>("Happy Birthday!");
  const [font, setFont] = useState<string>("Arial");
  const [color, setColor] = useState<string>("#000000");
  const [size, setSize] = useState<number>(24);
  const [previewMode, setPreviewMode] = useState<boolean>(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  };

  const handlePreview = () => {
    setPreviewMode(true);
  };

  const handlePurchase = () => {
    // Replace this with actual purchase logic
    alert("Proceeding to purchase...");
  };

  return (
    <div className="gift-card-editor">
      <h2>Edit Your Gift Card</h2>
      {!previewMode ? (
        <div className="editor-preview-container">
          <div className="editor-section">
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <div className="controls">
              <label>
                Font:
                <select value={font} onChange={(e) => setFont(e.target.value)}>
                  <option value="Arial">Arial</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier New">Courier New</option>
                </select>
              </label>
              <label>
                Color:
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </label>
              <label>
                Size:
                <input
                  type="number"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                />
              </label>
            </div>
            <button className="preview-button" onClick={handlePreview}>
              Preview
            </button>
          </div>
          <div className="preview-section">
            <GiftCardPreview
              photo={photo}
              text={text}
              font={font}
              color={color}
              size={size}
            />
          </div>
        </div>
      ) : (
        <div className="preview-container">
          <GiftCardPreview
            photo={photo}
            text={text}
            font={font}
            color={color}
            size={size}
          />
          <button className="purchase-button" onClick={handlePurchase}>
            Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default GiftCardEditor;
