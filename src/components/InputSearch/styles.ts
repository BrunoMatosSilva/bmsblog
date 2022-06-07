import styled from "styled-components";

export const InputWrapper = styled.form`
width: 100%;
display: flex;
align-items: center;
padding-top: 1rem;
justify-content: center;

input {
    height: 4rem;
    width: 30.75rem;
    border: none;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 1.25rem;
    background-color: ${({ theme }) => theme.white};

    @media(max-width: 900px){
        width: 13.25rem;
        height: 3rem;
        font-size: 1rem;
    }
}

    &::placeholder {
        color: ${({ theme }) => theme.grey};
        padding-left: 1rem;
        font-size: 1.25rem;
    }

    

button {
    height: 4rem;
    font-size: 1.25rem;
    padding: 0 1.25rem;
    margin-left: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.blue};
    border: none;
    border-radius: 0.5rem;
    transition: 0.4s all;

    @media(max-width: 900px){
        height: 3rem;
        font-size: 1rem;
    }

    &:hover {
        background-color: ${({ theme }) => theme.darkblue};
    }
}
`;