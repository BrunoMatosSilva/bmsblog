import { RiArrowRightSLine } from 'react-icons/ri';
import Link from 'next/link';
import { CategoryContainer } from './styles';
import { InputCategory } from '../InputCategory';
import { Title } from '../Title';

export function Category() {

  return (
    <CategoryContainer>
      <Title
        title="Browse The Category"
        path="/categories"
        category="See All Category"
        icon={<RiArrowRightSLine />}
      />
      <section data-aos="fade-down">
        <Link href="/css">
          <a><InputCategory icon="/css.svg" title="CSS" /></a>
        </Link>
        <Link href="/javascript">
          <a><InputCategory icon="/js.svg" title="Javascript" /></a>
        </Link>
        <Link href="/tailwind">
          <a><InputCategory icon="/tailwind.svg" title="Tailwind" /></a>
        </Link>
        <Link href="/vue">
          <a><InputCategory icon="/vue.svg" title="Vue JS" /></a>
        </Link>
        <Link href="/react">
          <a><InputCategory icon="/react.svg" title="React JS" /></a>
        </Link>
      </section>
    </CategoryContainer>
  );
}
