import styled from "styled-components";
import { containerCss } from "../../styles/GlobalStyles";


export const NotFoundWrapper = styled.section`
    margin: 60px auto 0;

    @media (min-width: 1024px) {
            margin: auto;
        }
`

export const Container = styled.div`
    ${containerCss}
`

export const Box = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 5px;

@media (min-width: 1024px) {
    flex-direction: row;
    gap: 0px;
}

div {
    &.not-found-text {
        flex: 0.9;
        color: ${props => props.theme.eerieBlack};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (min-width: 1024px) {
            justify-content: space-between;
            align-items: flex-start;
        }

        h1 {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.5;
            text-align: center;

            @media (min-width: 768px) {
                    width: 80%;
                    font-size: 42px;
                    font-weight: 700;
                    line-height: 1.3;
            }

            @media (min-width: 1024px) {
                text-align: left;
                width: 100%;
            }
        }

        p {
            padding-bottom: 2.65rem;

            @media (min-width: 768px) {
                padding-bottom: 2.5rem;
            }
        }

        button {
            width: 80%;
            padding: 15px;
            font-weight: 800;

            @media (min-width: 768px) {
                width: max-content;
            }
        }
    }


    &.not-found-image {
        flex: 1;
        
        img {
            width: 100%;
        }
    }

}
`