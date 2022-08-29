import { createGlobalStyle, css } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";


export const containerCss = css`
    padding: 0 15px;

    @media (min-width: 768px) {
        max-width: 750px;
        margin: auto;
    }

    @media (min-width: 1024px) {
        max-width: 980px;
    }

    
    @media (min-width: 1200px) {
        max-width: 1200px; 
    }

    @media (min-width: 1400px) {
            max-width: 1350px;
    }
`

export const hasScrollbar = css`
    padding-bottom: 5px;

    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
        border: 3px solid white;
        border-radius: 20px;

        &:hover {
            background: hsl(0, 0%, 80%);
        }
    }
    &:hover::-webkit-scrollbar-thumb {
        background: hsl(0, 0%, 90%);
    }
`





const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        font-family: "Sora", sans-serif;
        overscroll-behavior: contain;

        @media (min-width: 768px) {
            font-size: 17px;
        }

        @media (min-width: 1400px) {
            font-size: 18px;
        }
    }

    a { text-decoration: none; }

    li { list-style: none; }

    button { 
        background: none;
        font: inherit;
        border: none;
        cursor: pointer;
     }

     img, button, a { display: block; }

    span { display: inline-block; }

    input {
        display: block;
        width: 100%;
        font: inherit;
    }

    input::placeholder { font: inherit; }

   
    body { background: hsl(0, 100%, 100%); }



    
/**scrollbar style**/

body::-webkit-scrollbar { width: 15px; }

body::-webkit-scrollbar-track {
  background: var(--white);
  border-left: 1px solid hsl(0, 0%, 93%);
}

body::-webkit-scrollbar-thumb {
  background: hsl(0, 0%, 80%);
  border: 3px solid hsl(0, 100%, 100%);
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover { background: hsl(0, 0%, 70%); }

`   

export default GlobalStyles;