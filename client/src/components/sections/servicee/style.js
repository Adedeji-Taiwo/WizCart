import styled from "styled-components";
import { containerCss } from "../../../styles/GlobalStyles";


export const ServiceWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px auto;
`

export const Container = styled.div`
     ${containerCss}
    
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 60px;
     width: 100%;

     h1 {
            font-size: ${props => props.theme.font4xl};
            text-align:center;
            justify-self: flex-end;
            align-self: flex-start;
            line-height: 0;
            position: relative;
            top: 30px;

            &::before {
                content: "";
                position: absolute;
                left: 35%;
                top: 8px;
                width: 150px;
                height: 10px;
                transform: skew(-12deg) translateX(-50%);
                background: ${props => props.theme.primaryLight};
                z-index: -1;
                }
        }


     div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        text-align: center;

        .service-img {
            width: 100%;
            height: auto;
            max-width: 350px;
        }

        h2 {
            font-size: ${props => props.theme.font3xl};
            color: ${props => props.theme.eerrieBlack};
            

            span {
                color: ${props => props.theme.primaryDark};
            }
        }
     }
     


    ul {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        row-gap: 40px;
        padding-top: 20px;
        width: 100%;
        background: ${props => props.theme.primaryLighter};
        border-radius: ${props => props.theme.borderRadiusMd};
        padding-bottom: 20px;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 30px;
           
        }
       

        @media (min-width: 1024px) {
            grid-template-columns: repeat(4, 1fr);
        }



        li {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            text-align: center;
            padding: 0 45px;

            @media (min-width: 768px) {
                    padding: 0 20px;
                }

                @media (min-width: 1024px) {
                    padding: 0 5px;
                }
            

            img {
                width: 100%;
                height: auto;
                max-width: 50px;

                @media (min-width: 1024px) {
                    max-width: 60px;
                }
            }

            h3 {
                font-size: ${props => props.theme.fontxl};
            }

            p {
                color: ${props => props.theme.sonicSilver};
                font-size: ${props => props.theme.fontxs};
                line-height: 24px;
            }
        }
    }
`
