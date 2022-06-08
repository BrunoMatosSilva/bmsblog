import styled from "styled-components";

export const InputContainer = styled.div`
display: flex;
align-items: center;

div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 13.75rem;
    height: 17.5rem;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    border-radius: 0.5rem;
    transition: 0.4s all;

    @media(max-width: 900px){
        width: 6.25rem;
        height: 8.25rem;
    }

    @media(max-width: 550px){
      width: 4.25rem;
      height: 6.25rem;
      align: center;
      justify-content: center;
    }

    @media(max-width: 490px){
        width: 3.25rem;
        height: 4.25rem;
        align: center;
        justify-content: center;
    }

    @media(max-width: 390px){
        width: 2.25rem;
        height: 3.25rem;
        align: center;
        justify-content: center;
    }

    &:hover {
        background-color: ${({ theme }) => theme.blue};
        color: ${({ theme }) => theme.white};
    }

    > span {
        margin-top: 4rem;
        margin-left: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.75rem;
        height: 3.75rem;
        background-color: ${({ theme }) => theme.white};
        border-radius: 0.5rem;

        @media(max-width: 900px){
            width: 0.85rem;
            height: 0.85rem;
        }

        @media(max-width: 550px){
            margin-bottom: 3.5rem;
            width: 0.85rem;
            height: 0.85rem;
        }

        @media(max-width: 390px){
            width: 0rem;
            height: 0rem;
            background: transparent;
            }

        img {
            height: 1.50rem;
            width: 1.50rem;

            @media(max-width: 550px){
            margin-right: 0.50rem;
            }

            @media(max-width: 490px){
            margin-right: 1.7rem;
            }
        }
    }

    h2 {
        font-weight: 700;
        font-size: 1.5rem;
        padding-top: 2rem;
        margin-left: 2rem;

        @media(max-width: 900px){
            font-size: 0.65rem;
        }

        @media(max-width: 550px){
            display: none;
        }
    }

}
`;