import React from 'react';

import OpenIcon from '../assets/open.png';
import Button from './button';
import Icon from './icon';

const Nominations = ({nominations=[], remove, open}) => {
  return (
    <>
    { nominations.map((data) => {
        if (data) {
          return (
            <tr key={data.imdbID}>
                <td><Button aria-label="Remove Nomination" round={true} onClick={() => { remove(data) }}>✕</Button></td>
                <td className='movieTitle'>{data.Title + " (" + data.Year + ")"}</td>
                <td><Button aria-label="Expand Movie" close={true}><Icon src={OpenIcon} alt="Open" onClick={() => {open(data)}}/></Button></td>
            </tr>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Nominations