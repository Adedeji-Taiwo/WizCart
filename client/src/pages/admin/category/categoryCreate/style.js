import styled, { css }  from "styled-components";



export const CategoryWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5%;
`

export const Section = styled.div`
    background: #fbfbfb;
    border-radius: ${props => props.theme.borderRadiusMd};
    border: 1px solid ${props => props.theme.cultured};
    height: auto;
    width: 90%;
    margin: 25% auto 0;
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
                width: 50%;

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


export const FilterSection = styled.div`
    background: #fbfbfb;
    border-radius: ${props => props.theme.borderRadiusMd};
    border: 1px solid ${props => props.theme.cultured};
    height: auto;
    width: 90%;
    margin: 15% auto 0;
    padding: 22px;

    @media (min-width: 570px) {
        margin: 0 auto 5%;
        width: 100%;
        max-width: 350px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        max-width: 470px;
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

export const Filter = styled.form`
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
            padding: 10px;
            border: 1px solid ${props => props.theme.cultured};
            border-radius: ${props => props.theme.borderRadiusMd};

            &:focus {
                border: 1px solid ${props => props.theme.cultured};
                outline: none;
            }

            &::-webkit-search-cancel-button { 
                display: none;
            }

        }


        span {
            position: absolute;
            top: 50%;
            right: 1.5px;
            background: transparent;
            transform: translateY(-50%);
            color:  ${props => props.theme.primaryDark};
            font-size: 18px;
            padding: 8px 15px;
        }


    }
`


export const CategoryList = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin: 15% auto;
    padding-left: 12%;


    @media (min-width: 570px) {
        margin: 0 auto 5%;
        width: 60%;
        padding-left: 0;
    }


    p {
        font-size: ${props => props.theme.font2xs};
        color: ${props => props.theme.eerieBlack};
        background: #fbfbfb;
        border-radius: ${props => props.theme.borderRadiusMd};
        border: 1px solid ${props => props.theme.cultured};
        height: auto;
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span.icons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            font-size: ${props => props.theme.fontlg};
           
           a {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            width: 100%;
            height: auto;
            max-width: 20px;
            cursor: pointer;
        }
    }
}
`
