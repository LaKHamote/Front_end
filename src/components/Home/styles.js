import styled from 'styled-components';


export const Container = styled.nav `
    body {
        margin: 0;
        padding: 0;
        height: 0;
        box-sizing: border-box;
    }

    .product{
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 99.1vw;
        box-sizing: border-box;
    }
    
    #pizzas{
        background: linear-gradient(rgba(82, 143, 118, 0.45), rgba(82, 143, 118, 0.45)), url() no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    #massas{
        background: linear-gradient(rgba(82, 143, 118, 0.45), rgba(82, 143, 118, 0.45)),url(#) no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    #sobremesa{
        background: linear-gradient(rgba(82, 143, 118, 0.45), rgba(82, 143, 118, 0.45)),url() no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    .product .top{
        margin-top: 20rem;
        z-index: 2;
    }
    
    .product h1{
        font-family: Lobster;
        font-style: normal;
        font-weight: normal;
        font-size: 180px;
        line-height: 1.4rem;
        color: #FFFBD3;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-align: center;
    }

    @media only screen and (max-width: 700px) {
        .product h1{
            font-size: 20vw;
            margin-bottom: 3rem;
        }
    }
    .product h3{
        font-family: Lily Script One;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 1.4rem;
        align-items: center;
        text-align: center;
        text-decoration-line: underline;
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    
    .product .content{
        display: block;
        min-height: 100%;
        min-width: 310px;
    }
    
    .product .bottom {
        min-width: 310px;
        min-height: 49px;
        text-align: center;
    }
    
    .product .bottom button{
        border: none;
        border-radius: 60px;
        font-family: Lily Script One;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 18px;
        color: #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 16rem;
        height: 3.0625rem;
    }
    
    .product .bottom button a{
        text-decoration: none;
        color: #000000;
    }

    .orange{
        background-color: #FF5C01;
    }
    
    
    
    button:hover{
        cursor: pointer;
        opacity: 0.8;
        transition: 500ms ease;
    }


`;