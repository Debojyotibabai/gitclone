import React, { useContext } from "react";

// css
import "../Css/SearchBar.css";

// context
import { SearchValue, UserName } from "../Context";

const SearchBar = () => {
  // global values
  const [searchValue, setSearchValue] = useContext(SearchValue);
  const [userName, setUserName] = useContext(UserName);

  return (
    <div className="search__bar">
      <input
        placeholder="Search github profile"
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(searchValue);
          setSearchValue("");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
