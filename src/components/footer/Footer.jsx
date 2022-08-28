import ArrowBackIcon from "../../icons/ArrowBackIcon";
import PrimaryButton from "../button/primary button/PrimaryButton";
import SecondaryButton from "../button/secondary button/SecondaryButton";
import {
  StyledBackNavigationContainer,
  StyledBackNavigationIconText,
  StyledBackNavigationIconContainer,
  StyledButtonContainer,
  StyledOrderPageFooter,
} from "./FooterStyles";

export default function Footer() {
  return (
    <StyledOrderPageFooter>
      <StyledBackNavigationContainer>
        <StyledBackNavigationIconContainer>
          <ArrowBackIcon />
        </StyledBackNavigationIconContainer>
        <StyledBackNavigationIconText>Back</StyledBackNavigationIconText>
      </StyledBackNavigationContainer>
      <StyledButtonContainer>
        <SecondaryButton buttonText={"CONTINUE SHOPPING"} />
        <PrimaryButton buttonText={"PROCEED TO PAYMENT"} />
      </StyledButtonContainer>
    </StyledOrderPageFooter>
  );
}
