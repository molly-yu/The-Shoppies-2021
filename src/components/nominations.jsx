import React from 'react';

import OpenIcon from '../assets/open.png';
import Button from './button';
import Icon from './icon';

const Nominations = ({nominations=[], remove, open}) => {
  return (
    <>
    { nominations.map((data,index) => {
        if (data) {
          return (
            <tr key={data.imdbID}>
                <td><Button round={true} onClick={() => { remove(data) }}>✕</Button></td>
                <td className='movieTitle'>{data.Title + " (" + data.Year + ")"}</td>
                <td><Button close={true}><Icon aria-label="Expand" src={OpenIcon} alt="Open" onClick={() => {open(data)}}/></Button></td>
            </tr>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Nominations