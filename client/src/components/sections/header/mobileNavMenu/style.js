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
        font-size: ${props => props.theme.fontlg};
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
        border-radius:  ${props => props.theme.borderRadiusMd};


        /*&:nth-child(1) {
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
        }*/

        

        a {
        font-size: 20px;

        img {
            width: 100%;
            height: auto;
            max-height: 35px;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
   }
`