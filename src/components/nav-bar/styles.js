import styled, { css } from 'styled-components';


export const Container = styled.nav `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

#menu-h{
    background-color: #FF5C01;
}

#menu-h ul {
    max-width: 100%;
    list-style: none;
    padding: -5rem 0rem;
}

#menu-h ul li {
    display: inline;
}

#menu-h ul li a {
    color: #FFF;
    padding: 1.25rem;
    display: inline-block;
    text-decoration: none;
    margin: -0.5rem 8rem;
    font-weight: bold;
}

#menu-h ul li:last-child a {
    float: right;
    margin-right: 0rem;
}


img {
    width: 2rem;
    max-height: 1.75rem;
    border-radius:1rem;
    margin: 0 5px 0 20px;
}

${props => !props.isLogado && css`
    .check-out{
        display: none !important;
    }
`}

${props => props.isLogado && css`
    .check-in{
        display: none !important;
    }
`}



`;
