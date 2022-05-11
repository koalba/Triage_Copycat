import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

     * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  img, picture, video, iframe, figure {
    max-width: 100%;
    width: 100%;
    display: block;
    /* object-fit: cover; */
    object-position: center center;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    font-size: inherit;
  }

  p a {
    display: inline;
  }

  li {
    list-style-type: none;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {
    font-size: 1em;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
    color: inherit;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    content: none;
  }

  /* ::-moz-selection {
    background-color: black;
    color: white;
  }
  ::selection {
    background-color: black;
    color: white;
  } */

  form, input, textarea, select, button, label {
    font-family: inherit;
    font-size: inherit;
    hyphens: auto;
    background-color: transparent;
    color: inherit;
    display: block;
  }

  table, tr, td {
    border-collapse: collapse;
    border-spacing: 0;
  }

  svg {
    width: 100%;
    display: block;
    fill: currentColor;
  }

  body {
    font-family: ${ ({ theme }) => theme.ff };
    font-size: 100%;
    min-height: 100vh;
    hyphens: auto;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${ ({ theme }) => theme.c.black };
    color: ${ ({ theme }) => theme.c.white };

    @media screen and ( prefers-color-scheme:dark ){
      /* background-color : ${ ({ theme }) => theme.c.black }; */
      /* color            : ${ ({ theme }) => theme.c.white }; */
    }
  }
`

export default GlobalStyle