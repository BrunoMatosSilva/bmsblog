import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: ${({ theme }) => theme.lightgrey};

> div {
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 4rem;
margin-bottom: 4rem;

span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    width: 8.12rem;
    height: 8.12rem;
    background-color: ${({ theme }) => theme.white};
    border-radius: 50%;
    overflow: hidden;
}

h2 {
    color: ${({ theme }) => theme.black};
    font-size: 2.25rem;
    padding-top: 2rem;

    @media(max-width: 550px){
        font-size: 1.5rem;
    }

    @media(max-width: 390px){
        font-size: 1rem;
    }
}

p {
    color: ${({ theme }) => theme.grey};
    font-size: 1.25rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media(max-width: 550px){
        font-size: 0.85rem;
    }

    @media(max-width: 390px){
        font-size: 0.65rem;
        margin: 0 1rem;
    }
}
} 
`;