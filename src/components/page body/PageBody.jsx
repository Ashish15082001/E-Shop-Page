import CartInfoContainer from "../cart info container/CartInfoContainer";
import FormContainer from "../form container/FormContainer";
import MethodsContainer from "../methods container/MethodsContainer";
import { StyledPageBody } from "./PagebodyStyles";

export default function PageBody() {
  return (
    <StyledPageBody>
      <FormContainer />
      <MethodsContainer />
      <CartInfoContainer />
    </StyledPageBody>
  );
}
