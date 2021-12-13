import styled, { css } from "styled-components";


export const Container = styled.div`
    margin-bottom: 20vh;
    h1 {
        text-align: center;
    }
    a{
        text-decoration:none;
        color: inherit;
    }
`;

export const ButtonDiv = styled.div`
    margin: 3rem auto;
    text-align: center;
    button {
        font-size: 25px;
        padding: 1rem;
        background-color: #FF5C01;
        color: #FFF;
        cursor: pointer;
    }
    .products {
        border-radius: 25px 0 0 25px;
    }
    .categories {
        border-radius: 0 25px 25px 0;
        border-left: 0px
    }
    
    ${props => props.selectedType==="products" && css` 
        .products {
            background-color: blue;
        }
    `}
    ${props => props.selectedType==="categories" && css` 
        .categories {
            background-color: blue;
        }
    `}
`;

export const ProductDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const CategoriesDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const Form = styled.form`
    padding: 1rem 0 0 0 ;
    img {
        margin: auto;
        display: block;
        width: 20vw;
        height: 200px;
        border-radius: 10px;
    }

    button, input, textarea {
        display: block;
        background-color: rgba(255, 92, 1, 0.85);
        border-radius: 30px;
        height: 3.313rem;
        margin: 1.875rem auto;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Open Sans';
    }
    
    input {
        width: 63vw;
        padding-left: 2.5rem;
        ::placeholder {
            color: black;
        }
    }

    textarea {
        height: 7rem;
        padding: 1rem;
        width: 30vw;
    }
`;