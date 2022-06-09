import styled from "styled-components";

export const ContainerPost = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 4rem;
padding-top: 2rem;
`;

export const PostBody = styled.div`
width: 100%;
padding-top: 2rem;
color: ${({ theme }) => theme.black};
display: flex;
flex-direction: column;
gap: 1rem;

> span {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 75rem;
        height: 25rem;
        border-radius: 0.78rem;
        object-fit: cover;

        @media(max-width:550px) {
        max-width: 25rem;
    }

        @media(max-width: 390px){
            max-width: 18rem;
        }
    }
}

> div {
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: 2rem;

        @media(max-width:550px) {
        font-size: 1.5rem;
    }

        @media(max-width: 390px){
            font-size: 1rem;
        }
    }

    > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        gap: 1rem;

        > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;

            p:first-child{
                font-size: 1.15rem;
                font-weight: bold;
                color: ${({ theme }) => theme.blue};
            }

            p:last-child{
                font-size: 1.15rem;
                text-transform: uppercase;
                font-weight: bold;
                color: ${({ theme }) => theme.blue};
            }

            span{
                img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        object-fit: cover;
        margin-left: 1rem;
    }
            }
        }
    }
}

article {
    padding-bottom: 4rem;

    max-width: 1000px;

    @media(max-width:550px) {
        max-width: 25rem;
    }

        @media(max-width: 390px){
            max-width: 18rem;
        }

code {
        @media(max-width:550px) {
        max-width: 25rem;
    }

        @media(max-width: 390px){
            max-width: 8rem;
        }
       }

    h3 {
        font-size: 1.75rem;
    }
    p {
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 1.15rem;
    } 
    ul{
        padding-left: 1rem;
        li {
            padding-top: 0.85rem;
            list-style: inside;
    }
    }

    a {
        color:${({ theme }) => theme.blue};
        padding-bottom: 1rem;
        text-decoration: underline;
    }
     
}
`;