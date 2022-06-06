import { InputWrapper } from "./styles";
import toast from 'react-hot-toast';
import { useState } from "react";
import theme from "../../styles/theme";

export function InputSearch() {
    const [email, setEmail] = useState('');

    async function handleEmail(event) {
        event.preventDefault();

        if (!email.trim()) {
            toast.error('Preencha Email corretamente!', {
                style: {
                    background: theme.darkgrey,
                    color: theme.blue
                }
            });
            return;
        }

        try {
            setEmail('');

            toast.success('Email enviada com sucesso!', {
                style: {
                    background: theme.blue,
                    color: theme.white
                }
            });
        } catch (err) {
            toast.error('Ocorreu um erro ao tentar enviar seu Email. Tente novamente!', {
                style: {
                    background: theme.darkblue,
                    color: theme.white
                }
            });
        }
    }

    return (
        <InputWrapper onSubmit={handleEmail}>
            <input
                type="email"
                placeholder="Enter your email here..."
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                name="email"
            />
            <button type="submit">Subscribe</button>
        </InputWrapper>
    );
}