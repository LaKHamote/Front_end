import styled, { css } from "styled-components";

export const Category = styled.p`
    font-size: 25px;
    margin: auto;
    background-color: #FF5C01;
    color: #FFF;
    border-radius: 25px;
    padding: 1rem;
    cursor: pointer;
    ${props => props.selectedItem && css`
        border: 1px solid black;
        border-radius: 20px;
        background: blue;
    `}
`;