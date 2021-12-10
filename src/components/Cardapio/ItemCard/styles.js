import styled from "styled-components";

export const Containerzin = styled.div`

    min-width: 180px;
    height: 235px;
    margin: 3rem 4.5rem 2rem 3rem;
    
    img {
        width: 180px;
        height: 160px;
        border-radius: 1rem;
        :hover{
            transform: scale(1.1);
            display:flex;
            transition-duration: 500ms;
        }
    }


    p {
        text-align: center;
        max-width: 180px;
    }


`;
