import styled, { css } from "styled-components";

export const OverlayWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: hsla(0, 0%, 0%, 0.5);
    opacity: 0;
    pointer-events: none;
    z-index: 15;
    transition: 0.5s ease;
    

    ${props =>
      props.active &&
      css`
        opacity: 1;
        pointer-events: all;
  `}
`