import DeliveryIcon from "../../icons/DeliveryIcon";
import CardItemInfoContainer from "../cart item info container/CardItemInfoContainer";
import {
  StyledCartInfoContainer,
  StyledCartInfoContainerBottom,
  StyledCartInfoContainerTop,
  StyledDeliveryIconContainer,
  StyledDeliveryIconText,
  StyledDeliveryIconTextContainer,
} from "./CartInfoContainerStyles";

export default function CardInfoContainer() {
  const cartItems = [
    {
      id: 261311,
      itemName: "T-Shirt",
      company: "Summer Vibes",
      price: 89.99,
      imageUrl: "src/images/mohamad-khosravi-4fkUAduhoSY-unsplash (2).jpg",
    },
    {
      id: 212315,
      itemName: "Basic Slim",
      company: "Fit T-Shirt",
      price: 69.99,
      imageUrl: "src/images/phil-monte-4V4t0JcOM5E-unsplash (1).jpg",
    },
  ];

  return (
    <StyledCartInfoContainer>
      <StyledCartInfoContainerTop></StyledCartInfoContainerTop>
      <CardItemInfoContainer cartItems={cartItems} />
      <StyledCartInfoContainerBottom>
        <StyledDeliveryIconContainer>
          <DeliveryIcon />
        </StyledDeliveryIconContainer>
        <StyledDeliveryIconTextContainer>
          <StyledDeliveryIconText>You are $30,02 away</StyledDeliveryIconText>
          <StyledDeliveryIconText>from free shipping</StyledDeliveryIconText>
        </StyledDeliveryIconTextContainer>
      </StyledCartInfoContainerBottom>
    </StyledCartInfoContainer>
  );
}
