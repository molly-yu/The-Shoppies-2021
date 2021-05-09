import styled, { css } from "styled-components";

const Button = styled.button`
    
    border: none;
    margin: 3px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    
    &:hover {
        opacity:40%;
    }
    ${props => props.close ?
    css `
        color: grey;
        background-color: inherit;
        font-size:30px;
    `: css `
        background-color: #139936; /* Green */
        color: white;
        font-size: 16px;
    `};
    ${props => props.disabled ?
    css`
        opacity:40%;
        cursor: not-allowed;
    `: css`
        opacity:100%;
        `};
    ${props => props.round ?
        css`
            border-radius: 50%;
            height: 30px;
            width: 30px;
            margin-right: 10px;
        `: css`
            border-radius: 5%;
            padding: 9px 15px;
        `};
  `;

  export default Button;