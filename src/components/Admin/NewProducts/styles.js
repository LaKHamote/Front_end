import styled from "styled-components";

export const Container = styled.form`
    margin-top: 2.5rem;
    img {
        display: block;
        margin: auto;
        width: 150px;
        height: 130px;
    }

    button, input, select {
        display: block;
        background-color: rgba(255, 92, 1, 0.85);
        border-radius: 30px;
        height: 3.313rem;
        margin: 1.875rem auto;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Open Sans';
    }

    input, select {
        width: 63vw;
        padding-left: 2.5rem;
        ::placeholder {
            color: black;
        }
    }

    select{
        width: 65.2vw;
        height: 3.8rem;
    }

    button {
        width: 22vw;
    }

    a {
        display: block;
        text-align: center;
        text-decoration: none;
        color: rgba(255, 92, 1, 0.85);
    }
`;