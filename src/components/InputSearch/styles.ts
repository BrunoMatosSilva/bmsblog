import styled from "styled-components";

export const InputWrapper = styled.form`
width: 100%;
display: flex;
align-items: center;
padding-top: 1rem;

input {
    height: 4rem;
    width: 27.75rem;
    border: none;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 1.25rem;
    background-color: ${({ theme }) => theme.white};

    &::placeholder {
        color: ${({ theme }) => theme.grey};
        padding-left: 1rem;
        font-size: 1.25rem;
    }
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

    &:hover {
        background-color: ${({ theme }) => theme.darkblue};
    }
}
`;