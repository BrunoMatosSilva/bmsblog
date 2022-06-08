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
flex-direction: column;
padding-bottom: 2rem;

        @media(max-width: 550px){
            padding-top: 4rem;
            flex-direction: column-reverse;
        }

> section {
    max-width: 41.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 900px){
            max-width: 25.25rem;
        }

    h2 {
        font-size: 4rem;
        font-weight: bold;
        color: ${({ theme }) => theme.blue};
        padding-bottom: 1rem;
        text-align: center;

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