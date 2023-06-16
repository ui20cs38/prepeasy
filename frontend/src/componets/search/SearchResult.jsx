import "./SearchResult.css";

export const SearchResult = ({ result, setSearch }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => {
        setSearch(result)
        // return alert(`You selected ${result}!`)
      }}
    >
      {result}
    </div>
  );
};