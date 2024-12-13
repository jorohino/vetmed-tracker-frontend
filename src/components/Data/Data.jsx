import "./Data.css";
import DataHeader from "../DataHeader/DataHeader";
import DataCardList from "../DataCardList/DataCardList";

function Data({
  onCardClick,
  results,
  setResults,
  inputValue,
  setInputValue,
  isLoading,
  suggestionResults,
  handleSearch,
  handleSuggestionSearch,
  selectedSpecies,
  setSelectedSpecies,
}) {
  return (
    <>
      <DataHeader
        setResults={setResults}
        inputValue={inputValue}
        setInputValue={setInputValue}
        suggestionResults={suggestionResults}
        handleSearch={handleSearch}
        handleSuggestionSearch={handleSuggestionSearch}
        selectedSpecies={selectedSpecies}
        setSelectedSpecies={setSelectedSpecies}
      />
      <DataCardList
        onCardClick={onCardClick}
        results={results}
        setResults={setResults}
        isLoading={isLoading}
      />
    </>
  );
}

export default Data;
