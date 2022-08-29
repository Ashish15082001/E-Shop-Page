import { StyledInput, StyledInputContainer } from "./InputStyles";

export default function Input({placeholder}) {
  return (
    <StyledInputContainer>
      <StyledInput placeholder={placeholder}></StyledInput>
    </StyledInputContainer>
  );
}
