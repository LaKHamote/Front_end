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
        .crz {
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
        .crz {
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
    
    .icon{
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        img{
            height: 1.2rem;
            width: auto;
            margin-top: 5px;
            @media only screen and (min-width : 850px) {
                height: 2rem;
            }
            :hover{
                transform: scale(1.2);
                display:flex;
                transition-duration: 500ms;
            }
        }
        width: 100%;
    }

    /* .lixeira {
        
        
        
        .crz {
            align-self: flex-start;
            .icon {
                height: 1.2rem;
                width: auto;
                margin-top: 5px;
                @media only screen and (min-width : 850px) {
                    height: 2rem;
                }
            }
            cursor: pointer;
        }
        width: fit-content;
        display: flex;
        cursor: pointer;
        .icon {
            align-self:flex-end;
            height: 1.2rem;
            width: auto;
            margin-top: 5px;
            @media only screen and (min-width : 850px) {
                height: 2rem;
            }
        }
        cursor: pointer;
        :hover{
            transform: scale(1.3);
            display:flex;
            transition-duration: 500ms;
        }
    } */

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
