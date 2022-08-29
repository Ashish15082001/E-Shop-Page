import {
  StyledMethodOptions,
  StyledMethodsContainer,
  StyledMethodsOption,
  StyledMethodsOptionsContainer,
  StyledMethodsOptionsContainerTitle,
  StyledDeliveryMethodOptions,
} from "./MethodsContainerStyles";

export default function MethodsContainer() {
  return (
    <StyledMethodsContainer>
      <StyledMethodsOptionsContainer>
        <StyledMethodsOptionsContainerTitle>
          Payment method
        </StyledMethodsOptionsContainerTitle>
        <StyledMethodOptions>
          <StyledMethodsOption selected={true}></StyledMethodsOption>
          <StyledMethodsOption></StyledMethodsOption>
          <StyledMethodsOption></StyledMethodsOption>
          <StyledMethodsOption></StyledMethodsOption>
          <StyledMethodsOption></StyledMethodsOption>
          <StyledMethodsOption></StyledMethodsOption>
        </StyledMethodOptions>
      </StyledMethodsOptionsContainer>
      <StyledMethodsOptionsContainer>
        <StyledMethodsOptionsContainerTitle>
          Delivery method
        </StyledMethodsOptionsContainerTitle>
        <StyledDeliveryMethodOptions>
          <StyledMethodsOption selected={true}></StyledMethodsOption>
          <StyledMethodsOption></StyledMethodsOption>
          <StyledMethodsOption></StyledMethodsOption>
          <StyledMethodsOption></StyledMethodsOption>
        </StyledDeliveryMethodOptions>
      </StyledMethodsOptionsContainer>
    </StyledMethodsContainer>
  );
}
