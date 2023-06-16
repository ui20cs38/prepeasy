import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, setSearch }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.title} setSearch={setSearch} key={id} />;
      })}
    </div>
  );
};