import React from 'react';

import InputBar from './inputbar';

const SearchBar = ({keyword, setKeyword, searchEnter}) => {
    //const BarStyling = {width: "calc(100% - 91px)",background:"#F2F1F9", border: "1px solid #D8D5D5", padding:"0.5rem"};
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