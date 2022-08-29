import styled from "styled-components";
import { containerCss } from "../../../../styles/GlobalStyles";


export const DesktopNavigationMenu = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`


export const Container = styled.div`
   ${containerCss}
`

export const DesktopMenuCategoryList = styled.ul`
    @media (min-width: 1024px) {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    @media (min-width: 1200px) {
        gap: 45px;
    }
`

export const MenuCategory = styled.li`
    
    @media (min-width: 1024px) {
        &:not(:nth-child(2)) {
        position: relative;
        }
      

        &>a {
            position: relative;
            color: ${props => props.theme.onyx};
            font-size:  ${props => props.theme.fontxs};
            font-weight: 600;
            text-transform: uppercase;
            padding: 15px 0;
            transition:  ${props => props.theme.transitionTiming};

            &:hover, &.home {
                color: ${props => props.theme.primaryDark};

                &::after {
                    transform: scaleX(1);
                }
            }

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background:  ${props => props.theme.primaryDark};
                transform: scaleX(0);
                transform-origin: left;
                transition:  ${props => props.theme.transitionTiming};
            }
        }

        & > div {
            position: absolute;
            top: 100%;
            left: 0;
            background: ${props => props.theme.primaryDark};
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            padding: 30px;
            border: 1px solid ${props => props.theme.cultured};
            box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
            border-radius: ${props => props.theme.borderRadiusMd};
            transform: translateY(50px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: ${props => props.theme.transitionTiming};
            z-index: 5;
        }

        & > ul.dropdown-list {
            position: absolute;
            top: 100%;
            left: 0;
            width: 300px;
            background: ${props => props.theme.primaryDark};
            padding: 20px 0;
            border-radius: ${props => props.theme.borderRadiusMd};
            border: 1px solid ${props => props.theme.cultured};
            box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
            transform: translateY(50px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition:  ${props => props.theme.transitionTiming};
            z-index: 5;

            img {
                width: 100%;
                height: auto;
                max-width: 260px;
                margin: 0 20px auto;
                border-radius:  ${props => props.theme.borderRadiusSm};
            }
        }

        &:hover > div,
        &:hover > ul.dropdown-list {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }
    }
    
`

export const DropdownPanelList = styled.ul``;


export const MenuTitle = styled.li`

    @media (min-width: 1024px) {
        a {
        color: ${props => props.theme.white};
        font-size:  ${props => props.theme.fontxs};
        font-weight: 600;
        padding-bottom: 10px;
        border-bottom: 1px solid ${props => props.theme.cultured};
        margin-bottom: 10px;
        }
    }

`
export const PanelListItem = styled.li`

    @media (min-width: 1024px) {
        a {
        color:  ${props => props.theme.white};
        font-size:   ${props => props.theme.fontxs};
        text-transform: capitalize;
        transition:   ${props => props.theme.transitionTiming};

        &:hover {
            color: ${props => props.theme.eerieBlack};
        }
  }

    &:not(:last-child) a { 
         padding: 4px 0;
        }

     &:last-child { 
        margin-top: 20px; 
    }

    img {
        width: 100%;
        height: auto;
        border-radius: ${props => props.theme.borderRadiusSm};
    }
    }
`



export const DropDownItem = styled.li`
    @media (min-width: 1024px) {
        a {
            color:  ${props => props.theme.white};
            font-size:   ${props => props.theme.fontxs};
            text-transform: capitalize;
            transition:   ${props => props.theme.transitionTiming};
            padding: 4px 20px;

            &:hover {
                color: ${props => props.theme.eerieBlack};
            }
        }
    }
`
