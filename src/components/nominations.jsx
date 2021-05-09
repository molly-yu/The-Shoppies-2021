import React from 'react';
import styled from "styled-components";

import OpenIcon from '../assets/open.png';
import Button from './button';

const Icon = styled.img`
    height: 30px;
    width: 30px;   
    cursor: pointer; 
`;

const Nominations = ({nominations=[], remove, open}) => {
  return (
    <>
    { nominations.map((data,index) => {
        if (data) {
          return (
            <tr key={data.imdbID}>
                <td><Button round={true} onClick={() => { remove(data) }}>✕</Button></td>
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

export default Nominations