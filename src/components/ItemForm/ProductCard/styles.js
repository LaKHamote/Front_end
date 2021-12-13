import styled, { css } from "styled-components";

export const Container = styled.div`
    min-width: 150px;
    height: 230px;
    margin: 3rem 2.5rem;
    padding: 1rem;
    cursor: pointer;

    img {
        width: 144px;
        height: 139px;
        border-radius: 1rem;
    }

    p {
        text-align: center;
        max-width: 144px;
    }

    ${props => props.selectedItem && css`
        border: 1px solid #FF5C01;
        border-radius: 20px;
    `}

`;