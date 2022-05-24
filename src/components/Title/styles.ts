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
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.black};
        font-size: 1.5rem;
        font-weight: bold;
        transition: 0.4s all;

        &:hover {
            color: ${({ theme }) => theme.blue};
        }
    }
`;