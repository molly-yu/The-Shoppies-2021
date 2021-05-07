import React from 'react';

const SearchResults = ({results=[]}) => {
  return (
    <>
    { results.map((data,index) => {
        if (data) {
          return (
            <div key={data}>
              <p>{data}</p>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchResults