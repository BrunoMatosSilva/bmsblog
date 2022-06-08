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

        @media(max-width: 550px){
            padding-top: 4rem;
            flex-direction: column-reverse;
        }

> section {
    max-width: 41.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(max-width: 900px){
            max-width: 25.25rem;
        }

    h2 {
        font-size: 4rem;
        font-weight: bold;
        color: ${({ theme }) => theme.black};
        padding-bottom: 1rem;

        @media(max-width: 900px){
            font-size: 2rem;
        }

        @media(max-width: 550px){
            font-size: 1.5rem;
        }

        @media(max-width: 490px){
            font-size: 1rem;
        }
    }

    > div {
        border-left: 2px solid ${({ theme }) => theme.black};

        p {
            color: ${({ theme }) => theme.darkgrey};
            padding-left: 1rem;
            font-size: 1.25rem;

            @media(max-width: 900px){
            font-size: 1rem;
        }

        @media(max-width: 490px){
            font-size: 0.85rem;
        }
        }
    }

}

img {
    @media(max-width: 900px){
            height: 18.8rem;
            width:19.15rem;
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