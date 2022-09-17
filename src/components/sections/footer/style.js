import styled, {css} from "styled-components";
import { containerCss } from "../../../styles/GlobalStyles";


export const FooterWrapper = styled.footer`
    background:  ${props => props.theme.eerieBlack};
    padding: 0 0 30px;
    position:relative;
`

export const FooterNav = styled.div`
    border-bottom: 1px solid  ${props => props.theme.onyx};
    padding-bottom: 30px;
    margin-bottom: 30px;

    @media (max-width: 570px) {
        padding-top: 30px;
    }

    @media (min-width: 768px) {
        padding-top: 50px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 50px;
    }
`


export const Container = styled.div`
    ${containerCss}

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        row-gap: 50px;
        column-gap: 20px;
    }
`

export const FooterNavList = styled.ul`
    &:not(:last-child) { 
        margin-bottom: 20px;
     }

     &:last-child { 
        visibility: hidden;   
        }


     @media (min-width: 768px) {
        min-width: calc(33.33% - 15px);
        width: calc(33.33% - 15px);
        flex-grow: 1;

        &:not(:last-child) { 
            margin-bottom: 0; 
        }

        &:last-child { 
            visibility: hidden;
        }
     }

     @media (min-width: 1024px) {
        min-width: calc(20% - 16px);
        width: calc(20% - 16px);

        &:nth-child(5),
        &:last-child { 
            display: none;
        }
     }

     img {
        width: 100%;
        height: auto;
        max-width: 70px;
        cursor: pointer;
        transition: ${props => props.theme.transitionTiming};

        &:hover {
            transform: scale(1.2);
        }
     }
`

export const FooterNavItem = styled.li`
     padding: 5px 0;

     ${props =>
        props.flex &&
        css`
            display: flex;
            align-items: flex-start;
            gap: 10px;
    `}


     h2 {
        position: relative;
        color:  ${props => props.theme.white};
        font-size:  ${props => props.theme.fontxs};
        text-transform: uppercase;
        margin-bottom: 15px;
        padding-bottom: 5px;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background:  ${props => props.theme.primary};
            width: 60px;
            height: 1px;

            @media (min-width: 768px) {
                height: 2px;
            }
        }
     }

     h2.brand {
        &::before {
            background: none;
        }
     }


     a {
        width: max-content;
        color:${props => props.theme.sonicSilver};
        font-size:  ${props => props.theme.font3xs};
        text-transform: capitalize;
        transition: ${props => props.theme.transitionTiming};
        padding-bottom: 5px;

        &:hover {
            color:  ${props => props.theme.primaryLight};
        }
     }
` 




export const FooterSocialWrapper = styled.ul`
      
        display: flex;
        align-items: flex-start;
        gap: 5px;
        flex-direction: column;

        @media (max-width: 850px) {
            flex-direction: row;
            gap: 7px;
    }
       

       li {
        border-radius: ${props => props.theme.borderRadiusSm};
        transition: ${props => props.theme.transitionTiming};

        
        &:nth-child(1) {
            background: #1877f2; 
            
            &:hover {
                background: #0d6fed; 
            }
        }
        &:nth-child(2) {
            background: #55acee;

            &:hover {
                background: #47a5ed;  
            }
        }

        &:nth-child(3) {
            background: #cb2027; 

            &:hover {
                background: #be1e24;  
            }
        }

        &:nth-child(4) {
            background: linear-gradient(29.61deg, #f38334 0%, #da2e7d 50.39%, #6b54c6 100%);

            &:hover {
                background: linear-gradient(29.61deg, #e6670e 0%, #b52064 50.39%, #513aad 100%);

            }
        }

        &:nth-child(5) {
            background: #b00;

            &:hover {
                background: #ac0000;
            }
        }
       }
`

export const FooterSocialLinks = styled.a`
    cursor: pointer;


        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
        border-radius: ${props => props.theme.borderRadiusSm};
        color: ${props => props.theme.eerieBlack};
        transition: ${props => props.theme.transitionTiming};

       

    img {
        width: 100%;
        height: auto;
        max-width: 15px;

        &:hover {
                transform: scale(1.2);
            }
    }
`





export const FooterBottom = styled.div`
    margin-bottom: 50px;
    text-align: center;

    @media (min-width: 1024px) {
        margin-bottom: 0;
    }
`

export const FooterBottomContainer = styled.div`
    ${containerCss}
    display: flex;
    justify-content: space-between;
    align-items: center;

    p.payments {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        span {
        background: ${props => props.theme.white};
        border-radius: ${props => props.theme.borderRadiusSm};
        padding: 4px;
        }

        img {
            width: 100%;
            height: auto;
            max-width: 30px;
        }
    }

    p {
        color:${props => props.theme.sonicSilver};
        font-size:  ${props => props.theme.font3xs};
        font-weight: 500;
        text-transform: capitalize;
        letter-spacing: 1.2px;

        a {
            display: inline;
            color: inherit;
        }
    }

    @media (max-width: 570px) {
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
`