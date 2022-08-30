import { useState } from "react";
import { useDispatch } from "react-redux";
import DiscoverIcon from "../../../icons/DiscoverIcon";
import IdealIcon from "../../../icons/IdealIcon";
import MaestroIcon from "../../../icons/MaestroIcon";
import MastercardIcon from "../../../icons/MastercardIcon";
import PaypalIcon from "../../../icons/PaypalIcon";
import VisaIcon from "../../../icons/VisaIcon";
import { setPaymentMethod } from "../../../redux/slice/shippingDetailsSlice";
import {
  StyledIconContainer,
  StyledMethodOptions,
  StyledMethodsOption,
  StyledMethodsOptionsContainer,
  StyledMethodsOptionsContainerTitle,
} from "./PaymentMethodsStyles";

const PAYMENT_METHODS = {
  paypal: "paypal",
  visa: "visa",
  masterCard: "masterCard",
  maestro: "maestro",
  discover: "discover",
  ideal: "ideal",
};
export default function PaymentMethods() {
  const dispatch = useDispatch();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  return (
    <StyledMethodsOptionsContainer>
      <StyledMethodsOptionsContainerTitle>
        Payment method
      </StyledMethodsOptionsContainerTitle>
      <StyledMethodOptions>
        <StyledMethodsOption
          onClick={() => {
            dispatch(
              setPaymentMethod({ paymentMethod: PAYMENT_METHODS.paypal })
            );
            setSelectedPaymentMethod(PAYMENT_METHODS.paypal);
          }}
          data-choosen={selectedPaymentMethod === PAYMENT_METHODS.paypal}
        >
          <StyledIconContainer>
            <PaypalIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
        <StyledMethodsOption
          onClick={() => {
            dispatch(setPaymentMethod({ paymentMethod: PAYMENT_METHODS.visa }));
            setSelectedPaymentMethod(PAYMENT_METHODS.visa);
          }}
          data-choosen={selectedPaymentMethod === PAYMENT_METHODS.visa}
        >
          <StyledIconContainer>
            <VisaIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
        <StyledMethodsOption
          onClick={() => {
            dispatch(
              setPaymentMethod({ paymentMethod: PAYMENT_METHODS.masterCard })
            );
            setSelectedPaymentMethod(PAYMENT_METHODS.masterCard);
          }}
          data-choosen={selectedPaymentMethod === PAYMENT_METHODS.masterCard}
        >
          <StyledIconContainer>
            <MastercardIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
        <StyledMethodsOption
          onClick={() => {
            dispatch(
              setPaymentMethod({ paymentMethod: PAYMENT_METHODS.maestro })
            );
            setSelectedPaymentMethod(PAYMENT_METHODS.maestro);
          }}
          data-choosen={selectedPaymentMethod === PAYMENT_METHODS.maestro}
        >
          <StyledIconContainer>
            <MaestroIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
        <StyledMethodsOption
          onClick={() => {
            dispatch(
              setPaymentMethod({ paymentMethod: PAYMENT_METHODS.discover })
            );
            setSelectedPaymentMethod(PAYMENT_METHODS.discover);
          }}
          data-choosen={selectedPaymentMethod === PAYMENT_METHODS.discover}
        >
          <StyledIconContainer>
            <DiscoverIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
        <StyledMethodsOption
          onClick={() => {
            dispatch(
              setPaymentMethod({ paymentMethod: PAYMENT_METHODS.ideal })
            );
            setSelectedPaymentMethod(PAYMENT_METHODS.ideal);
          }}
          data-choosen={selectedPaymentMethod === PAYMENT_METHODS.ideal}
        >
          <StyledIconContainer>
            <IdealIcon />
          </StyledIconContainer>
        </StyledMethodsOption>
      </StyledMethodOptions>
    </StyledMethodsOptionsContainer>
  );
}
