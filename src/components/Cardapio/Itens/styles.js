import styled from "styled-components";

export const Container = styled.div`

    min-height: 100vh;
    max-width: 2000px;
    position: absolute;
    margin: 0 0 200px 200px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 1rem 4rem 1rem;

    @media only screen and (max-width : 915px) {
        margin-left: 100px;
        justify-content:center;
    }

`;
