import styled, { css } from "styled-components";

const Button = styled.button`
    background-color: #139936; /* Green */
    border: none;
    border-radius: 7px;
    color: white;
    margin: 5px;
    padding: 9px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    &:hover {
        opacity:70%;
    }
    ${props => props.disabled ?
    css`
        opacity:60%;
        cursor: not-allowed;
    `: css`
        opacity:100%;
        `};
  `;

  export default Button;