import React from 'react';

import Button from './button';

const Nominations = ({nominations=[], remove}) => {
  return (
    <>
    { nominations.map((data,index) => {
        if (data) {
          return (
            <tr key={data.imdbID}>
                <td>{data.Title + " (" + data.Year + ")"}</td>
                <td><Button round={true} onClick={() => { remove(data) }}>✕</Button></td>
            </tr>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Nominations