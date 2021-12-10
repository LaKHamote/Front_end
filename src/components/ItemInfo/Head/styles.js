import styled, { css } from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: fit-content;
    margin-top: 2rem;
    
    .item {
        width: 40vw;
        max-height: 56vh;
    }


    
    ${props => !props.isFavourite && css` 
        
        .R {
        display: none;
        }
        .B {
            display: none;
        }
        div {
            :hover{
                .E {
                display: none;
                }

                .R{
                display: inline;
                }
            }
        }
    `}

    ${props => props.isFavourite && css` 
        
        .E {
        display: none;
        }
        .B {
            display: none;
        }
        div {
            :hover{
                .R {
                display: none;
                }

                .B{
                display: inline;
                }
            }
        }
    `}
        
    div {
            
        align-self: flex-end;
        .crz {
            height: 1.2rem;
            width: auto;
            margin-top: 5px;

            @media only screen and (min-width : 850px) {
                height: 2rem;
            }
        }
        cursor: pointer;

    }


    p {
        text-align: center;
        max-width: 180px;
        font-size: 22px;
        @media only screen and (max-width : 600px){
            font-size: 14px;
        }
    }

    h1 {
        text-align: center;
        max-width: 300px;
        font-size: 30px;
        @media only screen and (max-width : 600px){
            font-size: 18px;
        }

    }


`;
