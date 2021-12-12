import styled from 'styled-components';


export const Container = styled.footer `

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}


footer {
    position:fixed;
    bottom:0;
    width:100%;
    background-color: #FF5C01;
}

ul li {
    display: inline;    
    padding: 0 1rem;
    display: flex;
    justify-content: center;      
    font-weight: bold;
}

h4{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
}

h5{
    color: #FFF;
    padding: 0.2rem 1rem;
    display: inline-block;
    text-decoration: none;
    margin: 0 2rem;
    font-weight: bold;
}

p{
    text-decoration: none;
    color: #FFF; 
    align-items: center;
    justify-content: center;
}

`;