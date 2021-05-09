import React from 'react';
import styled from "styled-components";

import OpenIcon from '../assets/open.png';
import Button from './button';

const Icon = styled.img`
    height: 30px;
    width: 30px;   
    cursor: pointer; 
`;

const SearchResults = ({results=[], nominated=[], add, open}) => {
  return (
    <>
    { results.map((data,index) => {
        let disabled = false;
        if (data) {
            if(nominated.length === 5 || nominated.find(movie => movie.Title === data.Title)){
                disabled = true;
            }
          return (
            <tr key={data.imdbID}>
                <td><Button disabled={disabled} round={true} onClick={() => { add(data) }}>＋</Button></td>
                <td>{data.Title + " (" + data.Year + ")"}</td>
                <td><Icon src={OpenIcon} alt="Open" onClick={() => {open(data)}}/></td>
            </tr>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchResults