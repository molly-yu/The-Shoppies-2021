import React from 'react';

import OpenIcon from '../assets/open.png';
import Button from './button';
import Icon from './icon';

const SearchResults = ({results=[], nominated=[], add, open}) => {
  return (
    <>
    { results.map((data) => {
        let disabled = false;
        if (data) { // dg==check if buttons need to be disabled
            if(nominated.length === 5 || nominated.find(movie => movie.imdbID === data.imdbID)){
                disabled = true;
            }
          return (
            <tr key={data.imdbID}>
                <td><Button aria-label="Add Nomination" disabled={disabled} round={true} onClick={() => { add(data) }}>＋</Button></td>
                <td className='movieTitle'>{data.Title + " (" + data.Year + ")"}</td>
                <td><Button aria-label="Expand" close={true}><Icon src={OpenIcon} alt="Open" onClick={() => {open(data)}}/></Button></td>
            </tr>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchResults