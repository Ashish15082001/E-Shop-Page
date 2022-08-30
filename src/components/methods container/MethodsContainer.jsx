import DeliveryMethods from "./delivery methods/DeliveryMethods";
import { StyledMethodsContainer } from "./MethodsContainerStyles";

import PaymentMethods from "./payment methods/PaymentMethods";

export default function MethodsContainer() {
  return (
    <StyledMethodsContainer>
      <PaymentMethods />
      <DeliveryMethods />
    </StyledMethodsContainer>
  );
}
