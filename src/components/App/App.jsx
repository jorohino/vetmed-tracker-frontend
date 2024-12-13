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

// API Imports
import { getSuggestions, getData } from "../../utils/adaeApi";

// Style Imports
import "./App.css";

function App() {
  // State + Context Setup
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestionResults, setSuggestionResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState("");

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
    console.log("Card clicked: ", card);
    setActiveModal("data");
    setSelectedCard(card);
  };

  // Search Logic
  const handleSearch = () => {
    if (!inputValue.trim()) {
      console.alert("No ingredient name provided");
      return;
    }

    setIsLoading(true);
    getData(inputValue, selectedSpecies)
      .then((results) => {
        setResults(results);
      })
      .catch((err) => console.error("Error fetching data: ", err))
      .finally(() => setIsLoading(false));
  };

  const handleSuggestionSearch = (value) => {
    if (!value.trim()) {
      setSuggestionResults([]);
      return;
    }

    getSuggestions(value)
      .then((results) => {
        console.log("Suggestion results: ", results);
        setSuggestionResults(results);
      })
      .catch((err) => console.error("Error fetching suggestions: ", err));
  };

  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route path="/" element={<Main onCardClick={handleCardClick} />} />
          <Route
            path="/data"
            element={
              <Data
                onCardClick={handleCardClick}
                results={results}
                setResults={setResults}
                inputValue={inputValue}
                setInputValue={setInputValue}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                suggestionResults={suggestionResults}
                handleSearch={handleSearch}
                handleSuggestionSearch={handleSuggestionSearch}
                selectedSpecies={selectedSpecies}
                setSelectedSpecies={setSelectedSpecies}
              />
            }
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
