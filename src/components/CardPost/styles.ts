import styled from "styled-components";

export const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
padding-left: 5rem;
`;

export const Card = styled.div`
max-width: 18.75rem;
padding-bottom: 1rem;
margin-bottom: 2rem;
transition: 0.4s all;
border-radius: 0.78rem;

&:hover {
    -webkit-box-shadow: 10px 10px 38px -21px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 38px -21px rgba(0,0,0,0.75);
box-shadow: 10px 10px 38px -21px rgba(0,0,0,0.75);
}

> div {
    padding: 1rem;

    img {
        border-radius: 0.78rem;
        width: 16.25rem;
        height: 12.37rem;
        object-fit: cover;
    }

    h2 {
        color: ${({ theme }) => theme.black};
        font-size: 1.25rem;
        padding-top: 1rem;
    }
}

> section {
    display: flex;
    flex-direction: row;
    padding-top: 3rem;

    img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        object-fit: cover;
        margin-left: 1rem;
    }

    span {
        margin-left: 1rem;
        color: ${({ theme }) => theme.black};

        p {
            padding-top: 0.60rem;
        }
    }
}
`;