import { React } from "react";
import "./Modal.css";

function Modal({
  card,
  isOpen,
  onClose,
  species,
  ingredient,
  reaction,
  frequency,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">Detailed View</h2>
        <button
          onClick={onClose}
          className="modal__close"
          type="button"
        ></button>
        <div className="modal__more-info-container">
          <p className="modal__more-info">
            <strong>Species:</strong> {species}
          </p>
          <p className="modal__more-info">
            <strong>Active ingredient:</strong> {ingredient}
          </p>
          <p className="modal__more-info">
            <strong>Reaction:</strong> {reaction}
          </p>
        </div>
        <p className="modal__more-info">
          <strong>Total reports:</strong> {frequency}
        </p>
      </div>
    </div>
  );
}

export default Modal;
