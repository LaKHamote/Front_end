import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
`;

export const Container = styled.div`
    margin-top: 2.5rem;
    margin-right: 5vw;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    .photo {
        img {
            width: 25vw;
            max-width: 200px;
            max-height: 200px;
            margin-left: 0.5rem;
        }
        button {
            display: block;
            margin: auto;
            border-radius: 10px;
            background-color: #FF5C01;
            color: #FFFFFF;
            padding: 0.5rem;
        }
    }
    .info {
        margin-left: 8vw;
        font-size: 18px;
        font-weight: 600;
        #email {
            margin-top: 3rem;
        }
    }
    @media only screen and (max-width: 500px) {
        .info {
            margin-left: 1vw;
        }

    }
    @media only screen and (max-width: 350px) {
        .info {
            font-size: smaller;
            margin-left: 0;
        }
    }
`;

export const H2 = styled.h2`
    text-align: center;
`;

export const Filter = styled.div`
    background-color: #FF5C01;
    text-align: end;
    width: 100vw;
    label {
        font-size: 18px;
        color: #FFFFFF;
    }
    select {
        margin: 0.5rem 1rem;
        background-color: #FF5C01;
        color: #FFFFFF;
        border: none;
    }
    @media only screen and (max-width: 300px) {
        label, select {
            font-size: smaller;
        }
    }
`;

export const FavouriteContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-initial;
    padding: 1rem 1rem 6rem 1rem;
`;
