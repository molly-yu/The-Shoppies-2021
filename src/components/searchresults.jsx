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
            <tr key={data.imdbID}>
                <td>{data.Title + " (" + data.Year + ")"}</td>
                <td><Button disabled={disabled} round={true} onClick={() => { add(data) }}>＋</Button></td>
            </tr>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchResults