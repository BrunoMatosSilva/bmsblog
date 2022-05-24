import { RiArrowRightSLine } from "react-icons/ri";
import { CardPost } from "../CardPost";
import { Title } from "../Title";
import { ContainerArticles } from "./styles";

export function ReactArticle() {
    return (
        <ContainerArticles>
            <Title title="React JS" path="/" category="See All Category" icon={<RiArrowRightSLine />} />
            <section>
                <CardPost />
            </section>
        </ContainerArticles>
    );
}