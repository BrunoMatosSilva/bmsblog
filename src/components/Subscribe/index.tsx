import { InputSearch } from "../InputSearch";
import MailImage from "../../assets/correio.svg";
import { Container } from "./styles";

export function Subscribe() {
    return (
        <Container>
            <div>
                <span>
                    <MailImage />
                </span>
                <h2>Subscribe For the lastest updates</h2>
                <p>Subscribe to newsletter and never miss the new post every week.</p>
                <InputSearch />
            </div>
        </Container>
    );
}