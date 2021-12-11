import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    width: fit-content;
    margin: auto;
    
    div {
        p{
            padding: 0 1rem;
            @media only screen and (max-width : 850px){
                text-align: center;
            }
        }
    }   

`;
