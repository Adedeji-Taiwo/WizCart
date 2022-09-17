import styled, { keyframes } from "styled-components";



const scalerFx = keyframes`
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




export const SplashScreenContainer = styled.section`
    background: #bba9dd;
    position: fixed;
    z-index: 999999999;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


    img.shopper {
        filter: drop-shadow(2px 4px 7px #565656);
   }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 70px;
        left: 100px;
        background: ${props => props.theme.cultured};
        border-radius: 50%;
        width: 120px;
        height: 120px;
        -webkit-animation: ${scalerFx} 3s alternate infinite ease-in;
        animation:  ${scalerFx} 3s alternate infinite ease-in;

        @media (max-width: 570px) {
            top: 40px;
            left: 40px;
            width: 100px;
            height: 100px;
            }
        


        img {
            width: 100%;
            height: auto;
            max-width: 50px;

            @media (min-width: 570px) {
                max-width: 70px;
            }
        }

        h2 {
            font-size: ${props => props.theme.fontmd};
        }
    }
`


