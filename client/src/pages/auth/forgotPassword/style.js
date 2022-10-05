import styled, { css } from "styled-components";


export const ForgotPasswordWrapper = styled.div`
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

    @media (min-width: 570px) {
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

    h3 {
    font-size: ${props => props.theme.fontxl};
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

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
       
    }

`
