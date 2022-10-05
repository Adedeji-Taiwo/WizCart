import styled from "styled-components";

export const LoadingContainer = styled.section`
        height: calc(100vh - 3rem - 6rem);
    

`
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30% 0;

    @media (min-width: 768px) {
        padding: 20% 0;
    }

    @media (min-width: 1024px) {
        padding: 10% 0;
    }
`
export const Counter = styled.span`
    background: ${props => props.theme.primaryLight};
    border: 3px solid ${props => props.theme.primary};
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`