import styled, { css } from "styled-components";
import { containerCss } from "../../../../styles/GlobalStyles";


export const HeaderMain = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid  ${props => props.theme.cultured};
    height: 6rem;

    @media (min-width: 480px) {
        padding: 20px 0;
    }
`

export const Container = styled.div`
    ${containerCss}

    @media (min-width: 570px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 768px) {
        gap: 80px;
    }


`

export const HeaderLogo = styled.a`
     margin-bottom: 20px;
    

     img {
        display: inline;
        margin: auto;
        width: 100%;
        height: auto;
        max-width: 70px;
        transition:  ${props => props.theme.transitionTiming};
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
     }

     @media (min-width: 570px) {
        margin-bottom: 0;
     }
`


export const HeaderSearchContainer = styled.div`
    position: relative;

    ${props =>
      props.focus &&
      css`
    z-index: 20;
  `}

  

    @media (min-width: 768px) {
        flex-grow: 1;
    }
`

export const SearchField = styled.input`
    font-size: ${props => props.theme.fontxs};
    color:  ${props => props.theme.onyx};
    padding: 10px 15px;
    padding-right: 50px;
    border: 1px solid ${props => props.theme.cultured};
    border-radius: ${props => props.theme.borderRadiusMd};

    &:focus {
        border: 1px solid ${props => props.theme.eerieBlack};
        outline: none;
    }

    &::-webkit-search-cancel-button { 
        display: none;
     }
`

export const SearchBtn = styled.button`
        position: absolute;
        top: 50%;
        right: 1.5px;
        background: transparent;
        transform: translateY(-50%);
        color:  ${props => props.theme.onyx};
        font-size: 18px;
        padding: 8px 15px;
        border-radius: ${props => props.theme.borderRadiusMd};
        transition: color ${props => props.theme.transitionTiming};

        &:hover {
            color: ${props => props.theme.primary};
        }

        ${props =>
            props.focus &&
            css`
            background: ${prop => prop.theme.primary};
            color: ${prop => prop.theme.eerieBlack};

            &:hover {
                color: ${prop => prop.theme.eerieBlack};
            }
        `}
`

export const CancelSearchBtn = styled.button`
        position: absolute;
        top: 55%;
        right: 55px;
        background: transparent;
        transform: translateY(-50%);
        color:  ${props => props.theme.eerieBlack};
        font-size: 20px;
        padding: 8px 5px;
        visibility: hidden;
        transition: color ${props => props.theme.transitionTiming};

        ${props =>
            props.focus &&
            css`
            visibility: visible;
            color: ${prop => prop.theme.eerieBlack};
        `}
`

export const HeaderUserActions = styled.div`
     display: none;

     @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
     }
`

export const ActionBtn = styled.button`
    @media (min-width: 1024px) {
       position: relative;
        font-size: 30px;
        color:  ${props => props.theme.eerieBlack};
        padding: 5px;
        transition:  ${props => props.theme.transitionTiming};

        &:nth-child(2) {
            font-size: 28px;
            padding-top: 0px;
        }
       

            &:hover {
                transform: scale(1.1);
            }
        }
`

export const Count = styled.span`
     position: absolute;
    top: -2px;
    right: -3px;
    background:  ${props => props.theme.primary};
    color:  ${props => props.theme.white};
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    padding: 2px 4px;
    border-radius: 20px;
`


export const Avatar = styled.button`
 @media (min-width: 1024px) {
    position: relative;
    margin-top: -6px;
    font-size: 32px;
    color:  ${props => props.theme.eerieBlack};
    padding: 5px;
    transition:  ${props => props.theme.transitionTiming};

    & > div.avatarContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3px;

            p.avatar {
            background: ${props => props.theme.white};
            border: 2px solid ${props => props.theme.eerieBlack};
            color: ${props => props.theme.primaryDark};
            font-size: ${props => props.theme.fontsm};
            font-weight: 600;
            width: 33px;
            height: 33px;
            border-radius: 50%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            }
            p.avatar-icon {
                font-size: ${props => props.theme.fontxs};
                color: ${props => props.theme.eerieBlack};
                transition: ${props => props.theme.transitionTiming};
            }
    }

    & > div.profile-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        width: 230px;
        background: ${props => props.theme.primaryDark};
        padding: 20px;
        border-radius: ${props => props.theme.borderRadiusMd};
        border: 1px solid ${props => props.theme.cultured};
        box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
        transform: translateY(50px);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition:  ${props => props.theme.transitionTiming};
        z-index: 25;
        display: block;

        ${props =>
            props.closeDropdown &&
            css`
          display: none;
        `}




        div {
                p {
                color: ${props => props.theme.white};
                font-size:  ${props => props.theme.fontxs};
                font-weight: 600;
                padding-bottom: 10px;
                border-bottom: 1px solid ${props => props.theme.cultured};
                }
                ul {
                    margin-bottom: 25px;
                    li {
                    list-style-type:square;
                    color:  ${props => props.theme.white};
                    font-size:   ${props => props.theme.font2xs};
                    transition:   ${props => props.theme.transitionTiming};
                    padding: 5px;
                    text-align: left;

                }
                }
        }

            div {
                p.icon-activity {
                        display: flex;
                        gap: 5px;
                        padding: 5px 20px 20px;
                        border-bottom: 1px solid ${props => props.theme.cultured};
                        margin-bottom: 10px;

                        span {
                            color:  ${props => props.theme.white};
                            text-transform: capitalize;
                            transition:   ${props => props.theme.transitionTiming};
                            display:block;
                            font-weight: 500;
                            font-size:   ${props => props.theme.fontxs};

                            &.icon {
                                font-size:   ${props => props.theme.fontsm};
                            }
                        
                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                    }
               
            }
        }


    &:hover > div.profile-dropdown{
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: all;

    }

    &:hover p.avatar-icon {
            transform: rotate(180deg);
        }
}

`



export const MobileAvatar = styled.button`
    display: none;


    @media (max-width: 1023px) {
        display: block;
        position: relative;
        font-size: 32px;
        color:  ${props => props.theme.eerieBlack};
        padding: 5px;
        z-index: 10;
        transition:  ${props => props.theme.transitionTiming};

        & > div.avatarContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3px;

            p.avatar {
            background: ${props => props.theme.white};
            border: 3px solid ${props => props.theme.primary};
            color: ${props => props.theme.eerieBlack};
            font-size: ${props => props.theme.fontlg};
            font-weight: 600;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            }
            p.avatar-icon {
                font-size: ${props => props.theme.fontsm};
            }

        }

        & > div.profile-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            width: 200px;
            background: ${props => props.theme.primaryDark};
            padding: 20px;
            border-radius: ${props => props.theme.borderRadiusMd};
            border: 1px solid ${props => props.theme.cultured};
            box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
            transform: translateY(50px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition:  ${props => props.theme.transitionTiming};
            display: block;

            ${props =>
                props.closeDropdown &&
                css`
              display: none;
            `}
            


            div {
                    p {
                    color: ${props => props.theme.white};
                    font-size:  ${props => props.theme.fontxs};
                    font-weight: 600;
                    padding-bottom: 10px;
                    border-bottom: 1px solid ${props => props.theme.cultured};
                    }
                    ul {
                        margin-bottom: 25px;
                        li {
                        list-style-type:square;
                        color:  ${props => props.theme.white};
                        font-size:   ${props => props.theme.font2xs};
                        transition:   ${props => props.theme.transitionTiming};
                        padding: 5px;
                        text-align: left;

                    }
                    }
            }

                div {
                    p.icon-activity {
                        display: flex;
                        gap: 5px;
                        padding: 5px 20px 20px;
                        border-bottom: 1px solid ${props => props.theme.cultured};
                        margin-bottom: 10px;

                        span {
                        color:  ${props => props.theme.white};
                        text-transform: capitalize;
                        transition:   ${props => props.theme.transitionTiming};
                        display:block;
                        font-weight: 500;
                        font-size:   ${props => props.theme.font2xs};
                        cursor: pointer;

                            &.icon {
                                font-size:   ${props => props.theme.fontsm};
                            }
                    
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
        }
    }
    

    &:hover > div.profile-dropdown{
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    z-index: 999;
    }

    @media (max-width: 570px) {
        bottom: 110px;
        left: 85%;
    }

    &:hover {
                transform: scale(1.1);
    }
`