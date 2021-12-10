import styled from 'styled-components'

export const BarraLateral = styled.div`
    height: 100%;
    width: 139px;
    background: rgba(255, 147, 69, 1);
    margin: 50px -8px ;
    position: fixed;
    display: flex;
    align-items: center;
    
    a {
        display: flex;
        justify-content: center;
        margin: 2rem;

        text-decoration: none;
        color: black;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;
    }

    a:hover {
        text-decoration: underline 2px;
        transform: scale(1.1);
    }

`;
