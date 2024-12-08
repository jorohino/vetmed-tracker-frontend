import { React } from "react";
import "./Modal.css";

function Modal({}) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">More Info</h2>
        <button className="modal__close" type="button"></button>
        <div className="modal__drug-info-container">
          <p className="modal__drug-info">
            <strong>Brand name:</strong>
          </p>
          <p className="modal__drug-info">
            <strong>Manufacturer:</strong>
          </p>
          <p className="modal__drug-info">
            <strong>Active ingredients:</strong>
          </p>
        </div>
        <div className="modal__rxn-info-container">
          <p className="modal__rxn-info">
            <strong>Species:</strong>
          </p>
          <p className="modal__rxn-info">
            <strong>Breeds:</strong>
          </p>
          <p className="modal__rxn-info">
            <strong>Total # of Animals Treated:</strong>
          </p>
          <p className="modal__rxn-info">
            <strong>Reported Reactions:</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
