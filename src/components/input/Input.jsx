import { StyledInput, StyledInputContainer } from "./InputStyles";

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <StyledInputContainer>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></StyledInput>
    </StyledInputContainer>
  );
}
