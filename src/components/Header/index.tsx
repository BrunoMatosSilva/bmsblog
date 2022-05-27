import { Logo } from "../Logo";
import { BiSearch } from "react-icons/bi";
import { SiBuymeacoffee } from "react-icons/si";
import { HeaderContainer } from "./styles";
import NavLink from "../NavBar";


export function Header() {

  return (
    <HeaderContainer>
      <Logo />
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Category" path="/category" />
        <NavLink title="About me" path="/about" />
        <a href="#">< BiSearch /> Search</a>
        <a className="blue"><SiBuymeacoffee /> Buy Me A Coffe</a>
      </ul>
    </HeaderContainer>
  );
}
