import styled from "styled-components";

export const Containerzin = styled.div`

    min-width: 180px;
    height: 235px;
    margin: 3rem 3rem 2rem 3rem;
    
    img {
        width: 180px;
        height: 160px;
    }


    p {
        text-align: center;
        max-width: 180px;
    }

    :hover {
        img {
            width: 225px;
            height: 200px;
            display:flex;
        }
        p {
            max-width:225px;
        }
    }

`;
