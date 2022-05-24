import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.blue};
      border-radius: 0.8rem;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.grey};
      border-radius: 0.8rem;
    }
  }
  html {
    min-height: 30rem;
    max-height: 30rem;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:${({ theme }) => theme.darkgrey};
  }
  body, html, #root {
    width: 100%;
    height: 100%;
  }
  body,
  input,
  textarea,
  button {
    font: 400 1rem "Plus Jakarta Sans", sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  ul{
    list-style:none;
  }
  .toastContainer {
    position: absolute !important;
    padding: 0.2rem;
    font-size: 0.7rem;
  }

`;

