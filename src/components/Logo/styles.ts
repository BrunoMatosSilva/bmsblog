import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    a {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

        > h2 {
        font-size: 2.25rem;
        font-weight: 700;
        color: ${({ theme }) => theme.darkblue};
    }

    span {
        font-size: 1.12rem;
        font-weight: bold;
        color: ${({ theme }) => theme.blue};
    }
    }

    
`;