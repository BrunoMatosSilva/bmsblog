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
        path="/"
        category="See All Category"
        icon={<RiArrowRightSLine />}
      />
      <section>
        <Link href="/css">
          <a><InputCategory icon="/css.svg" title="CSS" /></a>
        </Link>
        <Link href="/">
          <a><InputCategory icon="/js.svg" title="Javascript" /></a>
        </Link>
        <Link href="/">
          <a><InputCategory icon="/tailwind.svg" title="Tailwind" /></a>
        </Link>
        <Link href="/">
          <a><InputCategory icon="/vue.svg" title="Vue JS" /></a>
        </Link>
        <Link href="/">
          <a><InputCategory icon="/react.svg" title="React JS" /></a>
        </Link>
      </section>
    </CategoryContainer>
  );
}
