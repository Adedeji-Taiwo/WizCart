import styled, { css } from "styled-components"; 
import { hasScrollbar } from "../../../../styles/GlobalStyles";

export const MobileNavigationMenu = styled.nav`
    ${hasScrollbar};

    background: ${props => props.theme.white};
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    max-width: 320px;
    height: 100vh;
    padding: 20px;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
    overflow-y: scroll;
    overscroll-behavior: contain;
    visibility: hidden;
    transition: 0.5s ease;
    z-index: 20;

    ${props =>
      props.active &&
      css`
         left: 0;
        visibility: visible;
  `}
`


export const MenuTop = styled.div`
    padding-bottom: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${props => props.theme.cultured};

    h2 {
        color:  ${props => props.theme.primary};
        font-size:  ${props => props.theme.fontlg};
        font-weight: 600;
    }

    button {
        color: ${props => props.theme.eerieBlack};
        font-size: ${props => props.theme.fontxl};
    }
`


export const MobileMenuCategoryList = styled.ul`
     margin-bottom: 30px;
`

export const MenuCategory = styled.li`
    border-bottom: 1px solid  ${props => props.theme.cultured};
`

export const MenuTitle = styled.p`
    color: ${props => props.theme.eerieBlack};
    font-size:  ${props => props.theme.fontsm};
    font-weight: 500;
    padding: 12px 0;
`

export const AccordionMenu = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    div {
        font-size:  ${props => props.theme.fontxl};

        svg {
            fill: ${props => props.theme.eerieBlack};
    }

    }
    
`

export const SubMenuCategoryList = styled.ul`
    margin-left: 10px;
    max-height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: 0.6s ease-in-out;

    ${props =>
      props.toggle &&
      css`
        max-height: 148px;
        visibility: visible;
  `}
`

export const SubMenuCategory = styled.li`
    a {
        padding: 6px 0;
        font-size: ${props => props.theme.fontsm};
        color:  ${props => props.theme.onyx};
        font-weight: 300;

        &:hover {
            color: ${props => props.theme.primary};
        }
    }
`

export const MenuBottom = styled.div`

    ul {
        margin-bottom: 20px;

        li {
            border-bottom: none;

            p.menu-title {
                font-size: ${props => props.theme.fontsm};
                font-weight: 500;
                color: ${props => props.theme.eerieBlack};
                padding: 12px 0;
            }


            /*submenucategorylist*/
            ul {
                border: 1px solid  ${props => props.theme.cultured};
                border-radius: ${props => props.theme.borderRadiusMd};
                padding: 0 15px;
                margin-left: 0;
                box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.05);
               
                /*submenucategory*/
                li {
                    font-size:  ${props => props.theme.font3xl};
                    padding: 5px 0;

                    &:not(:last-child) { 
                    border-bottom: 1px solid ${props => props.theme.cultured};
                 }
                }
            }
        }
    }
`


export const MenuSocialContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
    top: 60px;

   li {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
        background:  ${props => props.theme.cultured};
        color:  ${props => props.theme.eerieBlack};
        font-size: 20px;
        padding: 10px;
        border-radius:  ${props => props.theme.borderRadiusMd};

        &:hover {
            background:  ${props => props.theme.primaryLight};
            color:  ${props => props.theme.white};
        }

        img {
            width: 100%;
            height: auto;
            max-height: 20px;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
   }
`