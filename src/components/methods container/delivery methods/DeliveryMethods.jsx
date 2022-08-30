import { useState } from "react";
import { useDispatch } from "react-redux";
import MaestroIcon from "../../../icons/MaestroIcon";
import { setDeliveryMethod } from "../../../redux/slice/shippingDetailsSlice";
import {
  StyledDeliveryMethodOptions,
  StyledIconContainer,
  StyledMethodsOption,
  StyledMethodsOptionsContainer,
  StyledMethodsOptionsContainerTitle,
} from "./DeliveryMethodsStyles";

const DELIVERY_METHODS = {
  inPost: "inPost",
  dpd: "dpd",
  dhl: "dhl",
  fedEx: "fedEx",
};

export default function DeliveryMethods() {
  const dispatch = useDispatch();
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null);

  return (
    <StyledMethodsOptionsContainer>
      <StyledMethodsOptionsContainerTitle>
        Delivery method
      </StyledMethodsOptionsContainerTitle>
      <StyledDeliveryMethodOptions>
        <StyledMethodsOption
          onClick={() => {
            dispatch(
              setDeliveryMethod({ deliveryMethod: DELIVERY_METHODS.inPost })
            );
            setSelectedDeliveryMethod(DELIVERY_METHODS.inPost);
          }}
          data-choosen={selectedDeliveryMethod === DELIVERY_METHODS.inPost}
        >
          <StyledIconContainer>
            <MaestroIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
        <StyledMethodsOption
          onClick={() => {
            dispatch(setDeliveryMethod({ deliveryMethod: DELIVERY_METHODS.dpd }));
            setSelectedDeliveryMethod(DELIVERY_METHODS.dpd);
          }}
          data-choosen={selectedDeliveryMethod === DELIVERY_METHODS.dpd}
        >
          <StyledIconContainer>
            <MaestroIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
        <StyledMethodsOption
          onClick={() => {
            dispatch(setDeliveryMethod({ deliveryMethod: DELIVERY_METHODS.dhl }));
            setSelectedDeliveryMethod(DELIVERY_METHODS.dhl);
          }}
          data-choosen={selectedDeliveryMethod === DELIVERY_METHODS.dhl}
        >
          <StyledIconContainer>
            <MaestroIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
        <StyledMethodsOption
          onClick={() => {
            dispatch(
              setDeliveryMethod({ deliveryMethod: DELIVERY_METHODS.fedEx })
            );
            setSelectedDeliveryMethod(DELIVERY_METHODS.fedEx);
          }}
          data-choosen={selectedDeliveryMethod === DELIVERY_METHODS.fedEx}
        >
          <StyledIconContainer>
            <MaestroIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
      </StyledDeliveryMethodOptions>
    </StyledMethodsOptionsContainer>
  );
}
