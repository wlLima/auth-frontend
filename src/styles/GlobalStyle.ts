import { createGlobalStyle } from "styled-components";

export const GlobalStyleCss = createGlobalStyle`

  :root {
    --background: #e2e2e2e;
    --text-tile: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (min-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--text-title);
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-size: 5rem;
    line-height: 5.10rem;
    letter-spacing: -0.9px;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-size: 4rem;
    line-height: 4.70rem;
    letter-spacing: -0.8px;
  }

`;
