import styled, { createGlobalStyle } from 'styled-components';

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

export const ContainerArticles = styled.div`
width: 100%;
padding-top: 2rem;
`;

export const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
padding-left: 5rem;
`;

export const Card = styled.div`
max-width: 18.75rem;
padding-bottom: 1rem;
margin-bottom: 2rem;
transition: 0.4s all;
border-radius: 0.78rem;

&:hover {
    -webkit-box-shadow: 10px 10px 38px -21px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 38px -21px rgba(0,0,0,0.75);
box-shadow: 10px 10px 38px -21px rgba(0,0,0,0.75);
}

> div {
    padding: 1rem;

    img {
        border-radius: 0.78rem;
        width: 16.25rem;
        height: 12.37rem;
        object-fit: cover;
    }

    h2 {
        color: ${({ theme }) => theme.black};
        font-size: 1.25rem;
        padding-top: 1rem;
    }
}

> section {
    display: flex;
    flex-direction: row;
    padding-top: 3rem;

    img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        object-fit: cover;
        margin-left: 1rem;
    }

    span {
        margin-left: 1rem;
        color: ${({ theme }) => theme.black};

        p {
            padding-top: 0.60rem;
        }
    }
}
`;

