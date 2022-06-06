import { useEffect } from "react";
import { IoClose } from 'react-icons/io5';
import { Container } from "./styles";


export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
            <ul>
                <a href="/">Home</a>
                <a href="/category">Category</a>
                <a href="/about">About Me</a>
                <a href="/">Search</a>
                <a href="/">Buy Me a Coffe</a>
            </ul>
        </Container>
    );
}

export default MenuMobile;