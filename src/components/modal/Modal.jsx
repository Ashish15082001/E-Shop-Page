import { StyledBackDrop } from "./ModalStyles";
import { useSelector } from "react-redux";
import ShippingConfirmationModal from "./shipping confirmation modal/ShippingConfirmationModal";

export default function Modal() {
  const modalDetails = useSelector((store) => store.modal);
  console.log(modalDetails);

  if (modalDetails.visibility === false) return null;

  return (
    <StyledBackDrop>
      <ShippingConfirmationModal />
    </StyledBackDrop>
  );
}
