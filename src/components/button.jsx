import styled, { css } from "styled-components";

const Button = styled.button`
    background-color: #139936; /* Green */
    border: none;
    color: white;
    margin: 3px;
   
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    &:hover {
        opacity:70%;
    }
    ${props => props.disabled ?
    css`
        opacity:70%;
        cursor: not-allowed;
    `: css`
        opacity:100%;
        `};
    ${props => props.round ?
        css`
            border-radius: 50%;
            height: 30px;
            width: 30px;
        `: css`
            border-radius: 5%;
            padding: 9px 15px;
        `};
  `;

  export default Button;