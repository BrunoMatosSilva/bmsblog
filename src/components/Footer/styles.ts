import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
background-color: ${({ theme }) => theme.lightgrey2};
padding: 0 4rem;
padding-top: 4rem;
padding-bottom: 4rem;

section {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10rem;

    > div {

        color: ${({ theme }) => theme.black};

        p {
            padding-top: 1rem;
            font-size: 1.12rem;
        }
        span {
            display: flex;
            font-size: 1.37rem;
            padding-top: 1rem;
            gap: 2rem;

            a {
                color: ${({ theme }) => theme.black};
                transition: 0.4s all;

                &:hover{
                    color: ${({ theme }) => theme.blue};
                }
            }
        }
    }

    .footerGroup {
        h2 {
            font-size: 1.25rem;
            text-transform: uppercase;
            padding-bottom: 1rem;
        }

        ul {
            display: flex;
            flex-direction: column;
            text-decoration: none;
            gap: 1rem;

            li{
                font-size: 1.12rem;
                transition: 0.4s all;
                
                &:hover {
                    color: ${({ theme }) => theme.blue};
                }
            }
        }
    }
}
`;