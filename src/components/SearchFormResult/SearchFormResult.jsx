import "./SearchFormResult.css";

export const SearchFormResult = ({ name, onClick }) => {
  return (
    <div className="search-form-result" onClick={() => onClick(name)}>
      {name}
    </div>
  );
};

export default SearchFormResult;
