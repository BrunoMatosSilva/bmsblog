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
    }

    h2 {
        font-weight: 700;
        font-size: 1.5rem;
        padding-top: 2rem;
        margin-left: 2rem;
    }

}
`;