import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../redux/slice/modalSlice";
import PrimaryButton from "../../button/primary button/PrimaryButton";
import SecondaryButton from "../../button/secondary button/SecondaryButton";
import {
  StyledButtonContainer,
  StyledShippingConfirmationModal,
  StyledShippingConfirmationModalTitle,
  StyledShippingDetailsContainer,
  StyledShippingDetailsContainerItem,
  StyledShippingDetailsContainerItemType,
  StyledShippingDetailsContainerItemValue,
} from "./ShippingConfirmationModalStyles";

export default function ShippingConfirmationModal() {
  const dispatch = useDispatch();
  const shippingDetails = useSelector((store) => store.shippingDetails);

  return (
    <StyledShippingConfirmationModal>
      <StyledShippingConfirmationModalTitle>
        Shipping details
      </StyledShippingConfirmationModalTitle>
      <StyledShippingDetailsContainer>
        {Object.keys(shippingDetails).map((key) => (
          <StyledShippingDetailsContainerItem key={key}>
            <StyledShippingDetailsContainerItemType>
              {key} : 
            </StyledShippingDetailsContainerItemType>
            <StyledShippingDetailsContainerItemValue>
              {shippingDetails[key]}
            </StyledShippingDetailsContainerItemValue>
          </StyledShippingDetailsContainerItem>
        ))}
      </StyledShippingDetailsContainer>
      <StyledButtonContainer>
        <SecondaryButton
          buttonText={"GO BACK"}
          onClick={() => dispatch(hideModal())}
        />
        <PrimaryButton buttonText={"CONFIRM"} />
      </StyledButtonContainer>
    </StyledShippingConfirmationModal>
  );
}
