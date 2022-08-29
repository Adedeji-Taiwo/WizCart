import styled, { keyframes } from 'styled-components';


export const PreloaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.white};
    overflow: hidden;
`

export const PreloaderInner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`



const preloaderFx = keyframes`
  0% {
      -webkit-transform: scale(0.7, 0.7);
              transform: scale(0.7, 0.7);
      opacity: 0.9;
    }
    100% {
      -webkit-transform: scale(1, 1);
              transform: scale(1, 1);
      opacity: 1;
    }
`

export const PreloaderIcon = styled.div`
    width: 100px;
    height: 100px;
    display: inline-block;
    padding: 0px;

    img {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: auto;
        max-width: 90px;
        -webkit-animation: ${preloaderFx} 2s alternate infinite ease-in;
        animation:  ${preloaderFx} 2s alternate infinite ease-in;
    }
`