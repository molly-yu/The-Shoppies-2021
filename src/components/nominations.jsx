import React from 'react';

import Button from './button';

const Nominations = ({nominations=[], remove}) => {
  return (
    <>
    { nominations.map((data,index) => {
        if (data) {
          return (
            <tr key={data.Title}>
                <td>{data.Title + " (" + data.Year + ")"}</td>
                <td><Button onClick={() => { remove(data) }}>Remove</Button></td>
            </tr>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Nominations