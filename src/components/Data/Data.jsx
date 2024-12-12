import { React, useState } from "react";
import "./Data.css";
import DataHeader from "../DataHeader/DataHeader";
import DataCardList from "../DataCardList/DataCardList";

function Data({ onCardClick }) {
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <DataHeader
        setResults={setResults}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <DataCardList onCardClick={onCardClick} results={results} />
    </>
  );
}

export default Data;
