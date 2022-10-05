import styled from "styled-components";



export const Pages = styled.div`
  height: calc(100vh - 3rem - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    height: calc(100vh);
  }

  h1 {
    font-size: calc(1rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;