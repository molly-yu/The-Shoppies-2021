import React from 'react';

import InputBar from './inputbar';

const SearchBar = ({keyword, setKeyword, searchEnter}) => {

    return (
      <InputBar
       key=""
       value={keyword}
       placeholder={"Search movies by title..."}
       onChange={(e) => setKeyword(e.target.value)}
       onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          searchEnter();
        }
      }}
      />
  );
}

export default SearchBar