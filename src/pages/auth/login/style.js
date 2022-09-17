import styled, { css } from "styled-components";


export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Section = styled.section`
    background: #fbfbfb;
    border-radius: ${props => props.theme.borderRadiusMd};
    border: 1px solid ${props => props.theme.cultured};
    height: auto;
    width: 90%;
    margin: 25% auto;
    padding: 22px;

    @media (min-width: 540px) {
        margin: 5% auto;
        width: 100%;
        max-width: 350px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        max-width: 370px;
    }


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    img {
        width: 100%;
        height: auto;
        max-width: 60px;
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;

    div {
        position: relative;
        width: 85%;

        @media (max-width: 300px) {
            width: 100%;
            }


        input {
            font-size: ${props => props.theme.font2xs};
            color:  ${props => props.theme.onyx};
            padding: 10px 10px 10px 40px;
            border: 1px solid ${props => props.theme.cultured};
            border-radius: ${props => props.theme.borderRadiusMd};

            &:focus {
                border: 1px solid ${props => props.theme.cultured};
                outline: none;
            }

            &::-webkit-search-cancel-button { 
                display: none;
            }

            &[type="submit"] {
                cursor: pointer;
                background: ${props => props.theme.primary};
                color: ${props => props.theme.white};
                font-weight: 600;
                margin-top: 10px;
                padding: 10px;
                text-transform: capitalize;

                ${props =>
                    props.fadeText &&
                    css`
                       color: rgba(255, 255, 255, 0.8);
                `}
               

                &:hover {
                    background: ${props => props.theme.primaryDark};
                }
            }
        }


        span {
            position: absolute;
            top: 50%;
            left: 1.5px;
            background: transparent;
            transform: translateY(-50%);
            color:  ${props => props.theme.primaryDark};
            font-size: 18px;
            padding: 8px 15px;

            &.spinner {
                top: 60%;

                @media (max-width: 350px) {
                        display: none;
                        }
        }

        }

        p.password {
            position: absolute;
            top: 50%;
            right: 1.5px;
            transform: translateY(-50%);
            color:  ${props => props.theme.onyx};
            font-size: ${props => props.theme.font3xs};
            padding: 8px 15px;
            cursor: pointer;
        }

        &:nth-child(2) {
            text-align: center;
            position: relative;
            font-size: ${props => props.theme.fontsm};
            text-transform: uppercase;

            &::after {
                position: absolute;
                top: 8px;
                content: '';
                right: 80px;
                width: 30px;
                height: 1px;
                background: ${props => props.theme.eerieBlack};
            }

            &::before {
                position: absolute;
                top: 8px;
                left: 80px;
                content: '';
                width: 30px;
                height: 1px;
                background: ${props => props.theme.eerieBlack};
            }


            @media (max-width: 370px) {
                &::after {
                    right: 65px;
                }
                &::before {
                    left: 65px;
                }
            }

            @media (max-width: 300px) {
                &::after,
                &::before  {
                    display: none;
                }
            }

        }

        &.google {
            z-index: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;


            .g-button{
            border: 1px solid rgb(66, 133, 244);
            background: rgb(66, 133, 244);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            box-shadow: 0 2px 6px #2a2a2a3d;
            border-radius: ${props => props.theme.borderRadiusMd};
            cursor: pointer;

                &:hover {
                    background: rgb(66, 133, 225);
                }
            }

            .g-logo{
            width: 30px;
            height: 30px;
            padding: 5px;
            background: ${props => props.theme.white};
            justify-self: flex-start;
            margin-right: 15px;
            border-bottom-left-radius:  ${props => props.theme.borderRadiusMd};
            border-top-left-radius:  ${props => props.theme.borderRadiusMd};
            }

            .g-text{
            font-size: ${props => props.theme.font3xs};
            padding: 5px;
            color: ${props =>  props.theme.white};
            text-align: center;
            }
        }
    }

`

export const Text = styled.div`
    display: inline;
    font-weight: 500;
    width: 100%;
    font-size:  ${props => props.theme.font3xs};


    ${props =>
      props.right &&
      css`
        text-align: left;
  `}


  
  ${props =>
      props.central &&
      css`
         text-align: center;
  `}


    p {
        color:  ${props =>  props.theme.primaryDark};
        cursor: pointer;
        display: inline;

        &:hover {
            color:  ${props => props.theme.onyx};
        }
    }
`