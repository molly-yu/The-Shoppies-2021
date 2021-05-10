import React from 'react';
import styled from "styled-components";

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

export default Nominations