import { StyledSecondaryButton } from "./SecondaryButtonStyles";

export default function SecondaryButton({ buttonText, onClick }) {
  return (
    <StyledSecondaryButton onClick={onClick}>
      {buttonText}
    </StyledSecondaryButton>
  );
}
