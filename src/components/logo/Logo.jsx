import {
  StyledLogoContainer,
  StyledLogoText,
  StyledLogoTextHighlight,
} from "./LogoStyles";

export default function Logo() {
  return (
    <StyledLogoContainer>
      <StyledLogoText>
        <StyledLogoTextHighlight>E-</StyledLogoTextHighlight>Shop
      </StyledLogoText>
    </StyledLogoContainer>
  );
}
