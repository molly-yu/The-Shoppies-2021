import React from 'react';

const SearchResults = ({results=[], add}) => {
  return (
    <>
    { results.map((data,index) => {
        if (data) {
          return (
            <tr>
                <td>{data}</td>
                <td>
                    <button onClick={() => { add(data) }}>Nominate</button>
                </td>
	    </tr>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchResults