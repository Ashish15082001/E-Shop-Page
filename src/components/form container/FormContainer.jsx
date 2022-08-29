import PrimaryButton from "../button/primary button/PrimaryButton";
import SecondaryButton from "../button/secondary button/SecondaryButton";
import Input from "../input/Input";
import {
  StyledButtonContainer,
  StyledFormContainer,
  StyledFormContainerTitle,
  StyledInputContainer,
  StyledShippingInfoContainer,
  StyledShippingInfoContainerTitle,
} from "./FormContainerStyles";

export default function FormContainer() {
  return (
    <StyledFormContainer>
      <StyledFormContainerTitle>Shiping and Payment</StyledFormContainerTitle>
      <StyledButtonContainer>
        <PrimaryButton buttonText="LOG IN" />
        <SecondaryButton buttonText="SIGN UP" />
      </StyledButtonContainer>
      <StyledShippingInfoContainer>
        <StyledShippingInfoContainerTitle>
          Shipping Information
        </StyledShippingInfoContainerTitle>
        <StyledInputContainer>
          <Input placeholder="Email" />
          <Input placeholder="Address" />
          <Input placeholder="First name" />
          <Input placeholder="City" />
          <Input placeholder="Last name" />
          <Input placeholder="Postal Code / ZIP" />
          <Input placeholder="Phone number" />
          <Input placeholder="Poland" />
        </StyledInputContainer>
      </StyledShippingInfoContainer>
    </StyledFormContainer>
  );
}
