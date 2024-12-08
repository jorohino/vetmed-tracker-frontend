// External Library + Context Imports
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Utility Imports

// Primary Component Imports
import Main from "../Main/Main";
import Data from "../Data/Data";
import Footer from "../Footer/Footer";

// Modal Component Imports
import Modal from "../Modal/Modal";

// Style Imports
import "./App.css";

function App() {
  // State + Context Setup
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  // Navigation Setup
  const navigate = useNavigate();

  // Modal Management
  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  // UI Interaction Handlers
  const handleCardClick = (card) => {
    setActiveModal("data");
    setSelectedCard(card);
  };

  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route path="/" element={<Main onCardClick={handleCardClick} />} />
          <Route
            path="/data"
            element={<Data onCardClick={handleCardClick} />}
          />
        </Routes>
        <Footer />
        <Modal
          isOpen={activeModal === "data"}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      </div>
    </div>
  );
}

export default App;
