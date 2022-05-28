import Link from "next/link";
import { LogoContainer } from "./styles";

export function Logo() {
    return (
        <LogoContainer>
            <a href="/">
                <h2>BMS</h2>
                <span>.Blog</span>
            </a>
        </LogoContainer>
    );
}