import styled from "styled-components";

export const Container = styled.div`
    max-height: 100vh;
    max-width: 2000px;
    position: absolute;
    margin: 50px 0 auto 333px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;

    @media only screen and (max-width : 915px) {
        margin-left: 100px;
        justify-content:center;
    }

`;