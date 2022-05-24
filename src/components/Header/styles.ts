import styled from "styled-components";

export const HeaderContainer = styled.header`
width: 100%;
display: flex;
align-items: center;
padding: 0 4rem;
justify-content: space-between;
padding-top: 2rem;
padding-bottom: 1.25rem;
background: ${({ theme }) => theme.lightgrey} ;
-webkit-box-shadow: 1px -12px 39px 0px #000000; 
box-shadow: 1px -12px 39px 0px #000000;
z-index: 99999999;

section {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 3rem;
    color: ${({ theme }) => theme.black};
    font-size: 1.25rem;
    font-weight: bold;
    transition: 0.4s all;

    a {
    padding-left: 1rem;

    &:hover {
    color: ${({ theme }) => theme.blue};
    }
    }



.blue {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.blue};
    transition: 0.4s all;
    padding: 1rem;
    border-radius: 0.25rem;

    &:hover {
        background-color: ${({ theme }) => theme.darkblue};
        color: ${({ theme }) => theme.white};
    }
}
}
`;