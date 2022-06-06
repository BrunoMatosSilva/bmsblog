import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 4rem;
background-color: ${({ theme }) => theme.lightgrey2};
padding-top: 8rem;

> svg {
        height:24.18rem;
        width: 29.37rem;
    }

> section {
    max-width: 41.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        font-size: 4rem;
        font-weight: bold;
        color: ${({ theme }) => theme.black};
        padding-bottom: 1rem;
    }

    > div {
        border-left: 2px solid ${({ theme }) => theme.black};

        p {
            color: ${({ theme }) => theme.darkgrey};
            padding-left: 1rem;
            font-size: 1.25rem;
        }
    }

}
`;

export const Spacer = styled.span`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.lightgrey2};
padding-top: 8rem;
padding-bottom: 4rem;

button {
    border: none;
    background: transparent;

    svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.black};
    transition: 0.4s;
    
   

    &:hover {
        transform: scale(1.5);
        color: ${({ theme }) => theme.blue};
    }
}
}
`;