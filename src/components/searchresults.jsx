import React from 'react';

import Button from './button';

const SearchResults = ({results=[],nominated=[], add}) => {
  return (
    <>
    { results.map((data,index) => {
        let disabled = false;
        if (data) {
            if(nominated.length === 5 || nominated.indexOf(data) !== -1){
                disabled = true;
            }
          return (
            <tr key={data.Title}>
                <td>{data.Title + " (" + data.Year + ")"}</td>
                <td><Button disabled={disabled} onClick={() => { add(data) }}>Nominate</Button></td>
            </tr>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchResults