import MastercardIcon from "../../icons/MastercardIcon";
import PaypalIcon from "../../icons/PaypalIcon";
import VisaCard from "../../icons/VisaIcon";
import MaestroIcon from "../../icons/MaestroIcon";
import DiscoverIcon from "../../icons/DiscoverIcon";
import {
  StyledMethodOptions,
  StyledMethodsContainer,
  StyledMethodsOption,
  StyledMethodsOptionsContainer,
  StyledMethodsOptionsContainerTitle,
  StyledDeliveryMethodOptions,
  StyledIconContainer,
} from "./MethodsContainerStyles";
import IdealIcon from "../../icons/IdealIcon";

export default function MethodsContainer() {
  return (
    <StyledMethodsContainer>
      <StyledMethodsOptionsContainer>
        <StyledMethodsOptionsContainerTitle>
          Payment method
        </StyledMethodsOptionsContainerTitle>
        <StyledMethodOptions>
          <StyledMethodsOption>
            <StyledIconContainer>
              <PaypalIcon />
            </StyledIconContainer>
          </StyledMethodsOption>
          <StyledMethodsOption>
            <StyledIconContainer>
              <VisaCard />
            </StyledIconContainer>
          </StyledMethodsOption>
          <StyledMethodsOption>
            <StyledIconContainer>
              <MastercardIcon />
            </StyledIconContainer>
          </StyledMethodsOption>
          <StyledMethodsOption>
            <StyledIconContainer>
              <MaestroIcon />
            </StyledIconContainer>
          </StyledMethodsOption>
          <StyledMethodsOption>
            <StyledIconContainer>
              <DiscoverIcon />
            </StyledIconContainer>
          </StyledMethodsOption>
          <StyledMethodsOption>
            <StyledIconContainer>
              <IdealIcon />
            </StyledIconContainer>
          </StyledMethodsOption>
        </StyledMethodOptions>
      </StyledMethodsOptionsContainer>
      <StyledMethodsOptionsContainer>
        <StyledMethodsOptionsContainerTitle>
          Delivery method
        </StyledMethodsOptionsContainerTitle>
        <StyledDeliveryMethodOptions>
          <StyledMethodsOption>
            <StyledIconContainer>
              <MaestroIcon />
            </StyledIconContainer>
          </StyledMethodsOption>
          <StyledMethodsOption>
            <StyledIconContainer>
              <MaestroIcon />
            </StyledIconContainer>
          </StyledMethodsOption>
          <StyledMethodsOption>
            <StyledIconContainer>
              <MaestroIcon />
            </StyledIconContainer>
          </StyledMethodsOption>
          <StyledMethodsOption>
            <StyledIconContainer>
              <MaestroIcon />
            </StyledIconContainer>
          </StyledMethodsOption>
        </StyledDeliveryMethodOptions>
      </StyledMethodsOptionsContainer>
    </StyledMethodsContainer>
  );
}
