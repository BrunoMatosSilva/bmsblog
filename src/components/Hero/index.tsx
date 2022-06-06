import { Container, Spacer } from "./styles";
import { FiChevronDown } from "react-icons/fi";
import { InputSearch } from "../InputSearch";

export function Hero() {

  function handleScrollFeature() {
    window.scroll({
      top: 900,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <Container>
        <section>
          <h2>Hi, Im BMS Front End Dev</h2>
          <div>
            <p>On this blog I share tips and tricks, frameworks, projects, tutorials, etc
              Make sure you subscribe to get the latest updates</p>
          </div>
          <InputSearch />
        </section>
        <img src="/hero.svg" alt="boneco" />
      </Container>
      <Spacer>
        <button type="button" onClick={handleScrollFeature}>
          <FiChevronDown />
        </button>
      </Spacer>
    </>

  );
}
