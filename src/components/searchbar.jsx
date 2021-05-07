import React from 'react';

const SearchBar = ({keyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
      <input 
       style={BarStyling}
       key=""
       value={keyword}
       placeholder={"Search for movies"}
      />
  );
}

export default SearchBar