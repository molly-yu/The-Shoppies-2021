import React from 'react';

const SearchResults = ({results=[],nominated=[], add}) => {
  return (
    <>
    { results.map((data,index) => {
        let disabled = false;
        if (data) {
            if(nominated.indexOf(data) !== -1){
                disabled = true;
            }
          return (
            <div key={data.Title}>
                <p>{data.Title}</p>
                <button disabled={disabled} onClick={() => { add(data) }}>Nominate</button>
            </div>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchResults