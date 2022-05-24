import { RiArrowRightSLine } from "react-icons/ri";
import { CardPost } from "../CardPost";
import { Title } from "../Title";
import { ContainerArticles } from "./styles";

export function VueArticle() {
    return (
        <ContainerArticles>
            <Title title="Vue JS" path="/" category="See All Category" icon={<RiArrowRightSLine />} />
            <section>
                <CardPost />
            </section>
        </ContainerArticles>
    );
}