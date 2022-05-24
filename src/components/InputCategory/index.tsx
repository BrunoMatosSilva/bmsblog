import { InputContainer } from './styles';

interface InputProps {
  icon: string;
  title: string;
}

export function InputCategory({ icon, title }: InputProps) {
  return (
    <InputContainer>
      <div>
        <span><img src={icon} /></span>
        <h2>{title}</h2>
      </div>
    </InputContainer>
  );
}
