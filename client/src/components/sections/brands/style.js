import styled from "styled-components";
import { containerCss } from "../../../styles/GlobalStyles";


export const BrandWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px auto;

    h1 {
            font-size: ${props => props.theme.font4xl};
            text-align:center;
            justify-self: flex-end;
            align-self: flex-start;
            line-height: 0;
            position: relative;

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
`

export const Container = styled.div`
     ${containerCss}
    
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 60px;
     width: 100%;
     

     div.mySwiper {
        width: 100%;

        @media (min-width: 768px) {
            width: 90%
    }
        @media (min-width: 1024px) {
        width: 70%;
    }
        .swiper-button-prev, .swiper-button-next {
                    color:  ${props => props.theme.white};
                    background: ${props => props.theme.primary};
                    padding: 5px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;

                    &::after {
                        font-size: 12px;
                    }

                    @media (max-width: 570px) {
                    width: 35px;
                    height: 35px;

                    &::after {
                        font-size: 10px;
                    }
                    }
                }

            div {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0px;
            }
        }
`

export const ImgContainer = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #fbfbfb;
    border-radius: ${props => props.theme.borderRadiusMd};
    border: 1px solid ${props => props.theme.cultured};

    @media (max-width: 570px) {
        padding: 10px;
    }

    img {
        width: 100%;
        height: auto;
        max-width: 90px;
        transition: ${props => props.theme. transitionTiming};

        @media (max-width: 570px) {
            max-width: 70px;
    }
        &:hover {
        transform: scale(1.1);
    }
    }
`
