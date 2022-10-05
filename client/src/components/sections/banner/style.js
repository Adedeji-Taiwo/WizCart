import styled from "styled-components";
import { containerCss } from "../../../styles/GlobalStyles";



export const Section = styled.section`
    height: 20rem;
    position: relative;

    @media (min-width: 768px) {
        height: 16rem;
 }
    

  
    background: ${props => `rgba(${props.theme.primaryLight}, 0.9)`};

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    overflow: hidden;
`

export const Container = styled.div`
    width: 100%;
    ${containerCss}
`

export const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;


 
 @media (min-width: 768px) {
    top: 50%;
 }

 @media (min-width: 1024px) {
    top: 70%;
 }



@media (max-width: 480px) {
      
       height: 160px;
    }




   span  {
    width: 100%;
    img {
        width: 100%;
        object-fit: cover;
        object-position: right;
    }
   }
`

export const Title = styled.h1`
     font-size: ${props => props.theme.font3xl};
     color: ${props => props.theme.white};
     z-index: 10;
     text-transform: capitalize;
     margin-bottom: 30px;
`

export const InputContainer = styled.div`
position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 90%;


    @media (min-width: 570px) {
        width: 60%;
    }
 
 @media (min-width: 768px) {
    width: 50%;
 }

 @media (min-width: 1024px) {
    width: 40%;
 }


 input {
    padding: 12px 15px;
    padding-right: 50px;
    border: 2px solid ${props => props.theme.cultured};
    color: ${props => props.theme.cultured};
    border-radius: ${props => props.theme.borderRadiusMd};
    font-size: ${props => props.theme.font2xs};
    background: transparent;
    outline: none;

    &::placeholder {
        font-size: ${props => props.theme.font2xs};
        color: ${props => props.theme.cultured};
    }
 }

 button {
        position: absolute;
        top: 50%;
        right: 5px;
        background: ${props => props.theme.primary};
        transform: translateY(-50%);
        color:  ${props => props.theme.white};
        font-size: ${props => props.theme.fontsm};
        padding: 7px 15px;
        border-radius: ${props => props.theme.borderRadiusMd};
        transition: color ${props => props.theme.transitionTiming};

        &:hover {
            background: ${props => props.theme.primaryDark};
        }
    }
`
