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
                <a href="/" onClick={() => setMenuIsVisible(false)}>Home</a>
                <a href="/category" onClick={() => setMenuIsVisible(false)}>Category</a>
                <a href="/about" onClick={() => setMenuIsVisible(false)}>About Me</a>
                <a href="/" onClick={() => setMenuIsVisible(false)}>Search</a>
                <a href="/" onClick={() => setMenuIsVisible(false)}>Buy Me a Coffe</a>
            </ul>
        </Container>
    );
}

export default MenuMobile;