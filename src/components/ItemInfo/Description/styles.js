import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    width: fit-content;
    margin: auto;
    padding: 1rem 1rem 8rem 1rem;
    
    div {
        p{
            padding: 0 1rem;
            @media only screen and (max-width : 850px){
                text-align: center;
            }
        }
    }   

`;
