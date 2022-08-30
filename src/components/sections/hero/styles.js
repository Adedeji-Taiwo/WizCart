import styled from "styled-components";
import { containerCss } from "../../../styles/GlobalStyles";


export const Banner = styled.section`
    margin: 60px 0 30px;

    @media (min-width: 1024px) {
        margin-top: 0;
    }
`

export const Container = styled.div`
     ${containerCss}
`

export const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: ${props => props.theme.borderRadiusMd};
    /*overflow: auto hidden;
    scroll-snap-type: inline mandatory;
    overscroll-behavior-inline: contain;*/

    .swiper-button-prev, .swiper-button-next {
        color:  ${props => props.theme.primary};
        display: none;

        @media (min-width: 570px) {
            display: block;
        }
    }

    .swiper-pagination-clickable .swiper-pagination-bullet {
        background: ${props => props.theme.primary};
    }
    
    .swiper-pagination-horizontal {

        @media (max-width: 570px) {
            position: relative;
            top: 5px;
        }
    }

    .swiper-pagination-progressbar-fill {
        background:  ${props => props.theme.primary};
    }
`

export const SliderItem = styled.div`
    position: relative;
    min-width: 100%;
    max-height: 450px;
    aspect-ratio: 1 / 1;
    border-radius:  ${props => props.theme.borderRadiusMd};
    overflow: hidden;
    /*scroll-snap-align: start;*/
    

    @media (min-width: 480px) {
        aspect-ratio: 5 / 3;
    }

    @media (min-width: 570px) {
        aspect-ratio: 4 / 2;
    }
    @media (min-width: 768px) {
        aspect-ratio: auto;
        height: 350px;
    }
    @media (min-width: 1024px) {
        height: 380px;
    }
    @media (min-width: 1200px) {
        img {
            object-position: top;
        }
    }
    @media (min-width: 1400px) {
        height: 450px;
    }




    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: right;
    }

    div {
        background: hsla(0, 0%, 100%, 0.8);
        position: absolute;
        bottom: 25px;
        left: 25px;
        right: 25px;
        padding: 20px 25px;
        border-radius: ${props => props.theme.borderRadiusMd};

        @media (min-width: 480px) {
            top: 50%;
            right: auto;
            bottom: auto;
            transform: translateY(-50%);
            max-width: 320px;
        }

        @media (min-width: 570px) {
            background: none;
        }
        @media (min-width: 768px) {
            max-width: 380px; 
        }
        @media (min-width: 1024px) {
            left: 75px;
            max-width: 400px;
        }
        @media (min-width: 1400px) {
            left: 110px;
            max-width: 460px;
        }


        p {
            color: ${props => props.theme.primary};
            font-size: ${props => props.theme.fontxs};
            font-weight: 500;
            text-transform: capitalize;
            letter-spacing: 2px;
            margin-bottom: 10px;

            @media (min-width: 480px) {
                font-size:  ${props => props.theme.fontmd};
            }

            @media (min-width: 768px) {
                font-size:  ${props => props.theme.fontxl};
            }
        }

        h2 {
            color: ${props => props.theme.eerieBlack};
            font-size: ${props => props.theme.font3xl};
            text-transform: uppercase;
            line-height: 1;
            margin-bottom: 10px;
        }

        span {
            display: none;

            @media (min-width: 480px) {
                display: block;
                color: ${props => props.theme.onyx};
                font-size: ${props => props.theme.fontxs};
                font-weight: 500;
                margin-bottom: 10px;

                b {
                    font-size: ${props => props.theme.font2xl};
                }
            }

             @media (min-width: 768px) {
                font-size:  ${props => props.theme.fontlg};

                b {
                 font-size:  ${props => props.theme.font4xl};
                }
            }
        }

        button {
            background: ${props => props.theme.primary};
            color: ${props => props.theme.white};
            width: max-content;
            font-size: ${props => props.theme.font5xs};
            font-weight: 600;
            text-transform: uppercase;
            padding: 4px 10px;
            border-radius: ${props => props.theme.borderRadiusSm};
            transition: ${props => props.theme.transitionTiming};

            &:hover {
                transform: scale(1.1);
                background: ${props => props.theme.primaryDark};
            }

            @media (min-width: 480px) {
                padding: 12px 24px;
            }
            @media (min-width: 768px) {
                font-size:  ${props => props.theme.font3xs};
            }
        }
    }
`