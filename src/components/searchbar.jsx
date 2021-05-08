import React from 'react';

const SearchBar = ({keyword, setKeyword}) => {
    const BarStyling = {width: "calc(100% - 91px)",background:"#F2F1F9", border: "1px solid #D8D5D5", padding:"0.5rem"};
    return (
      <input 
       style={BarStyling}
       key=""
       value={keyword}
       placeholder={"Search movies by title..."}
       onChange={(e) => setKeyword(e.target.value)}
      />
  );
}

export default SearchBar