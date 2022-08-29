import styled from "styled-components";
import { containerCss } from "../../../../styles/GlobalStyles";


export const CtaWrapper = styled.div`
   display: none;
   background:  ${props => props.theme.eerieBlack};
   height: 3rem;

    @media (min-width: 480px) {
        display: block;
        padding: 10px 0;
        border-bottom: 1px solid ${props => props.theme.cultured};
    }
`

export const Container = styled.div`
    ${containerCss}

     @media (min-width: 570px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const HeaderSocialWrapper = styled.ul`

       @media (min-width: 480px) {
            display: none;
       }

       @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        gap: 5px;
       }
`

export const HeaderSocialLinks = styled.a`
    cursor: pointer;


    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        background: ${props => props.theme.eerieBlack};
        border-radius: ${props => props.theme.borderRadiusSm};
        color: ${props => props.theme.eerieBlack};
        transition: ${props => props.theme.transitionTiming};

        &:hover {
            background: ${props => props.theme.primaryLight};
            color: ${props => props.theme.white};
        }
    }

    img {
        width: 100%;
        height: auto;
        max-width: 20px;

        &:hover {
                transform: scale(1.2);
            }
    }
`


export const HeaderAlertNews = styled.div`
    @media (min-width: 480px) {
        color: ${props => props.theme.white};
        font-size: ${props => props.theme.font3xs};
        text-transform: uppercase;

        b {
            font-weight: 600;
        }
    }
`

export const HeaderTopActions = styled.div`
    cursor: pointer;
    position: relative;
    padding: 1px;
    
    @media (min-width: 480px) {
        display: none;
    }

    @media (min-width: 570px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    p {
        font-size:  ${props => props.theme.font3xl};
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(2) {
            color: ${props => props.theme.white};
            font-size:  ${props => props.theme.fontsm};
        }
    }

    div {
       display: none;
        position: absolute;
        right: 3px;
        top: 27px;
        margin-top: 3%;
        font-size:  ${props => props.theme.fontxl};
        background: ${props => props.theme.primaryLight};
        min-width: 55px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        padding: 0.5rem 0.8rem;
        cursor: auto;
        
        border-radius: ${props => props.theme.borderRadiusMd};
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        border: 1px solid  ${props => props.theme.cultured};
        transition: ${props => props.theme.transitionTiming};

        button {
            cursor: pointer;

            &:hover {
                transform: scale(0.8, 0.9);
            }
        }
    }

    &:hover div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 6px;
    }
`

