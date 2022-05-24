import { Logo } from "../Logo";
import { BiSearch } from "react-icons/bi";
import { SiBuymeacoffee } from "react-icons/si";
import { HeaderContainer } from "./styles";


export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <section>
        <a href="/">Home</a>
        <a href="#">Category</a>
        <a href="#">About Me</a>
        <a href="#">< BiSearch /> Search</a>
        <a className="blue"><SiBuymeacoffee /> Buy Me A Coffe</a>
      </section>
    </HeaderContainer>
  );
}
