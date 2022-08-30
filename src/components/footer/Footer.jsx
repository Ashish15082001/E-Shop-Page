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
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

export default function Footer() {
  const shippingDetails = useSelector((store) => store.shippingDetails);

  function onProceedToPayment() {
    if (
      shippingDetails.email === "" ||
      shippingDetails.address === "" ||
      shippingDetails.firstName === "" ||
      shippingDetails.city === "" ||
      shippingDetails.lastName === "" ||
      shippingDetails.postalCode === "" ||
      shippingDetails.phoneNumber === "" ||
      shippingDetails.country === ""
    )
      return alert("Please provide all shipping information.");

    if (
      isFinite(+shippingDetails.phoneNumber) === false ||
      shippingDetails.phoneNumber.length !== 10
    )
      return alert("Please enter valid phone number.");

    if (
      isFinite(+shippingDetails.postalCode) === false ||
      shippingDetails.postalCode.length !== 6
    )
      return alert("Please enter valid postal code.");

    if (shippingDetails.paymentMethod === "")
      return alert("Please select payment method.");

    if (shippingDetails.deliveryMethod === "")
      return alert("Please select delivery method.");

    return window.confirm(
      "Shipping information has been succesfully updated. Do you want to go to payment page?"
    );
  }

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
        <PrimaryButton
          buttonText={"PROCEED TO PAYMENT"}
          onClick={onProceedToPayment}
        />
      </StyledButtonContainer>
    </StyledOrderPageFooter>
  );
}
