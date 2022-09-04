import styled from 'styled-components';


export const Section = styled.div`
    padding: 6px 10px; 
    background: ${props => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:  ${props => props.theme.fontxl};
    font-weight: 600;
    color: ${props => props.theme.white};
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 30;
    display: none;
    cursor: pointer;
    transition: all .3s ease-out 0s;
    border-radius: ${props => props.theme.borderRadiusMd};

    @media (min-width: 1024px) {
        display: block;
    }

    &:hover {
    box-shadow: 0 1rem 3rem rgba(35, 38, 45, 0.15);
    transform: translate3d(0, -5px, 0);
    background-color: ${props => props.theme.primaryDark};
    }
`