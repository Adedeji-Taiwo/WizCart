import styled from "styled-components";


export const MobileBottomNavs = styled.div`
    background: ${props => props.theme.white};
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
    z-index: 5;

    button {
        position: relative;
        font-size: 26px;
        color: ${props => props.theme.eerieBlack};
        padding: 10px;

        img {
            width: 100%;
            height: auto;
            max-width: 35px;
        }


        span {
            background: ${props => props.theme.primary};
            color: ${props => props.theme.white};
            position: absolute;
            top: 0;
            right: 0;
            font-size: 12px;
            font-weight: 500;
            line-height: 1;
            padding: 2px 4px;
            border-radius: 20px;
        }
    }

    @media (min-width: 480px) {
        border-top-left-radius: ${props => props.theme.borderRadiusMd};
        border-top-right-radius: ${props => props.theme.borderRadiusMd};
    }

    @media (min-width: 1024px) {
        display: none;
    }

`

