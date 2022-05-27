import styled from "styled-components";

interface NavLinkProps {
    isActive: boolean;
}

export const NavLinkContainer = styled.li<NavLinkProps>`
a {
    color: ${(props) => props.isActive ? props.theme.blue : props.theme.black};
    transition: 0.5s;
    &:hover{
        color: ${(props) => props.isActive ? props.theme.black : props.theme.blue};
    }
}
`;