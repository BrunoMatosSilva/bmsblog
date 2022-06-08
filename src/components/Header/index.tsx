import { Logo } from "../Logo";
import { BiSearch } from "react-icons/bi";
import { SiBuymeacoffee } from "react-icons/si";
import { HeaderContainer } from "./styles";
import NavLink from "../NavBar";
import { useState } from "react";
import { RiMenu3Fill } from 'react-icons/ri';
import MenuMobile from "../MenuMobile";


export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <MenuMobile menuIsVisible={menuIsOpen} setMenuIsVisible={setMenuIsOpen} />
      <HeaderContainer data-aos="fade-in">
        <Logo />

        <section>
          <RiMenu3Fill onClick={() => setMenuIsOpen(true)} className="mobile" />
        </section>

        <ul>
          <NavLink title="Home" path="/" />
          <NavLink title="Category" path="/categories" />
          <NavLink title="About me" path="/" />
          <a href="#">< BiSearch /> Search</a>
          <a className="blue"><SiBuymeacoffee /> Buy Me A Coffe</a>
        </ul>
      </HeaderContainer>
    </>
  );
}
