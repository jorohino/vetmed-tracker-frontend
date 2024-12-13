import "./Modal.css";

function Modal({ card, isOpen, onClose }) {
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
            <strong>Species:</strong> {card.species || "N/A"}
          </p>
          <p className="modal__more-info">
            <strong>Active ingredient:</strong> {card.ingredient || "N/A"}
          </p>
          <p className="modal__more-info">
            <strong>Reaction:</strong> {card.reaction || "N/A"}
          </p>
          <p className="modal__more-info">
            <strong>Total reports:</strong> {card.frequency || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
