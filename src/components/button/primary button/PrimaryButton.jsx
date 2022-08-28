import { StyledPrimaryButton } from "./PrimaryButtonStyles";

export default function PrimaryButton({ buttonText, onClick }) {
  return (
    <StyledPrimaryButton onClick={onClick}>{buttonText}</StyledPrimaryButton>
  );
}
