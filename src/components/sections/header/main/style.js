import styled from "styled-components";
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
     cursor: pointer;

     img {
        display: inline;
        margin: auto;
        width: 100%;
        height: auto;
        max-width: 70px;
        transition:  ${props => props.theme.transitionTiming};

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

    @media (min-width: 570px) {
        min-width: 300px;
    }

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

    &::-webkit-search-cancel-button { 
        display: none;
     }
`

export const SearchBtn = styled.button`
        position: absolute;
        top: 50%;
        right: 2px;
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
`

export const HeaderUserActions = styled.div`
     display: none;

     @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        gap: 15px;
     }
` 

export const ActionBtn = styled.button`
       position: relative;
        font-size: 30px;
        color:  ${props => props.theme.eerieBlack};
        padding: 5px;
        transition:  ${props => props.theme.transitionTiming};

        &:hover {
            transform: scale(1.1);
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