import styled from "styled-components";

export const ButtonWrapper = styled.button`
            background: ${props => props.theme.primary};
            color: ${props => props.theme.white};
            width: max-content;
            font-size: ${props => props.theme.font5xs};
            font-weight: 600;
            text-transform: uppercase;
            padding: 4px 10px;
            border-radius: ${props => props.theme.borderRadiusSm};
            transition: ${props => props.theme.transitionTiming};

            &:hover {
                transform: scale(1.1);
                background: ${props => props.theme.primaryDark};
            }

            @media (min-width: 480px) {
                padding: 12px 24px;
            }
            @media (min-width: 768px) {
                font-size:  ${props => props.theme.font3xs};
            }
`