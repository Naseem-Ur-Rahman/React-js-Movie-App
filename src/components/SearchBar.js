import React from "react";
import SearchIcon from "../search.svg";
const SearchBar = ({ searchTerm, setSearchTerm, setMovies }) => {
  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {searchTerm?.length > 0 ? (
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            setMovies(searchTerm);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
