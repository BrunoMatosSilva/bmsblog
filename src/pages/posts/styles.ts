import styled from "styled-components";

export const ContainerPost = styled.div`
width: 100%;
padding-top: 2rem;
display: flex;
flex-direction: column;
`;

export const PostBody = styled.div`
width: 100%;
padding-top: 2rem;
color: ${({ theme }) => theme.black};
display: flex;
flex-direction: column;
`;