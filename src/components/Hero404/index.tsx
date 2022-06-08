import { Container } from "./styles";

export function HeroError() {

  function handleScrollFeature() {
    window.scroll({
      top: 900,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <Container>
        <section data-aos="fade-right">
          <h2>Erro 404 - Pagina em Construção</h2>
        </section>
        <div data-aos="fade-left">
          <img src="/404error.svg" alt="boneco" />
        </div>
      </Container>
    </>

  );
}
