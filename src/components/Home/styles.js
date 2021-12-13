import styled from 'styled-components';


export const Container = styled.nav `
    body {
        margin: 0;
        padding: 0;
        height: 0;
        box-sizing: border-box;
    }
    .product{
        position: relative;
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 99vw;
        box-sizing: border-box;
    }
    
    #pizzas{
        position: relative;
        background: linear-gradient(rgba(82, 143, 118, 0.45), rgba(82, 143, 118, 0.45)), url() no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    #massas{
        position: relative;
        background: linear-gradient(rgba(82, 143, 118, 0.45), rgba(82, 143, 118, 0.45)),url(#) no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    #sobremesa{
        position: relative;
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
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFBD3;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    
    .product h3{
        margin-top: -5rem;
        font-family: Lily Script One;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 1.4rem;
        display: flex;
        align-items: center;
        text-align: center;
        text-decoration-line: underline;
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    
    #sub-pizza{
        margin-left: 7rem;
    }
    
    #sub-massa{
        margin-left: 6.5rem;
    }
    
    #sub-sobremesa{
        margin-left: 20rem;
    }
    
    .product .content{
        position: relative;
        display: block;
        min-height: 100%;
        min-width: 310px;
    }
    
    .product .bottom {
        position: relative;
        bottom: 1;
        display: flex;
        min-width: 310px;
        min-height: 49px;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    
    .product .bottom button{
        border: none;
        border-radius: 60px;
        font-family: Lily Script One;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 16rem;
        height: 3.0625rem;
    }
    
    .orange{
        padding: 0rem 0rem 0rem 3.4rem; 
        background-color: #FF5C01;
    }
    
    #B-pizza .orange{
        margin-top: 0.9rem;
        margin-left: 0.6rem;
    }
    
    #B-massa .orange{
        margin-top: 0.2rem;
        margin-left: 1.4rem;
    }
    
    #B-sobremesa .orange{
        margin-top: 0.2rem;
        margin-left: -14rem;
    
    }
    
    button:hover{
        cursor: pointer;
        opacity: 0.8;
        transition: 500ms ease;
    }


`;