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
    if (shippingDetails.email === "");
    // toast.error("🦄 Wow so easy!", {
    //   position: "bottom-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
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
