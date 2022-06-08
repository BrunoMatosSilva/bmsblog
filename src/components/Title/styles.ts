import styled from "styled-components";

export const HeaderTitle = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.black};
    padding: 0 4rem;
    padding-bottom: 2rem;

    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.black};
        
        @media(max-width: 550px){
            font-size: 1rem;
        }

        @media(max-width: 490px){
            font-size: 0.85rem;
        }

        @media(max-width: 390px){
        font-size: 0.65rem;
        }
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.black};
        font-size: 1.5rem;
        font-weight: bold;
        transition: 0.4s all;

        @media(max-width: 550px){
            font-size: 1rem;
        }

        @media(max-width: 490px){
            font-size: 0.85rem;
        }

        @media(max-width: 390px){
        font-size: 0.65rem;
        }

        &:hover {
            color: ${({ theme }) => theme.blue};
        }
    }
`;