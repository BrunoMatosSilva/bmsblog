import { InputWrapper } from "./styles";

export function InputSearch() {
    return (
        <InputWrapper>
            <input type="email" placeholder="Enter your email here..." />
            <button>Subscribe</button>
        </InputWrapper>
    );
}