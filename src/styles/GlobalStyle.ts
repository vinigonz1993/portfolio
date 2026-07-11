import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
  background: ${({theme}) => theme.colors.background};
}


body {

  background: ${({theme}) => theme.colors.background};

  color: ${({theme}) => theme.colors.text};

  font-family:
    Inter,
    "SF Pro Display",
    "SF Pro Text",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  line-height: 1.6;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}


::selection {

  background: ${({theme}) => theme.colors.primary};

  color: ${({theme}) => theme.colors.background};

}


a {

  color: inherit;

  text-decoration: none;

  transition: color 0.2s ease;

}


button,
input,
textarea {

  font: inherit;

}


img {

  max-width: 100%;

  display: block;

}


h1,
h2,
h3,
h4 {

  line-height: 1.2;

  letter-spacing: -0.02em;

}


p {

  color: ${({theme}) => theme.colors.textSecondary};

}


section {

  padding: 6rem 0;

}


@media(max-width:768px){

  section {

    padding: 4rem 0;

  }

}


::-webkit-scrollbar {

  width: 10px;

}


::-webkit-scrollbar-track {

  background: ${({theme}) => theme.colors.background};

}


::-webkit-scrollbar-thumb {

  background: ${({theme}) => theme.colors.border};

  border-radius: 10px;

}


::-webkit-scrollbar-thumb:hover {

  background: ${({theme}) => theme.colors.primary};

}

`;

export default GlobalStyle;