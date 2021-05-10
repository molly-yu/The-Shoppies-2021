import React from 'react';
import styled from "styled-components";

import OpenIcon from '../assets/open.png';
import Button from './button';
import Icon from './icon';

const SearchResults = ({results=[], nominated=[], add, open}) => {
  return (
    <>
    { results.map((data,index) => {
        let disabled = false;
        if (data) {
            if(nominated.length === 5 || nominated.find(movie => movie.imdbID === data.imdbID)){
                disabled = true;
            }
          return (
            <tr key={data.imdbID}>
                <td><Button disabled={disabled} round={true} onClick={() => { add(data) }}>＋</Button></td>
                <td>{data.Title + " (" + data.Year + ")"}</td>
                <td><Button close={true}><Icon aria-label="Expand" src={OpenIcon} alt="Open" onClick={() => {open(data)}}/></Button></td>
            </tr>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchResults