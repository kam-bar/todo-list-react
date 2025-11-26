import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Montserrat", sans-serif;
    background-color: ${({ theme }) => theme.colors.gallery};
    margin: 0;
    padding: 20px;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 10px;
    }
  }
`;
