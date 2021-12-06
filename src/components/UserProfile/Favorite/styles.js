import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin: 0 5rem;
    p {
        margin: auto 1rem;
    }
    @media only screen and (max-width: 500px) {
        margin: 0 1rem;
    }
    @media only screen and (max-width: 350px) {
        margin: 0;
        p {
            margin: auto 0.3rem;
        }
    }
`;