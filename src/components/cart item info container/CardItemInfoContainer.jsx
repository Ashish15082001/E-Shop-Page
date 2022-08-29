import CartItem from "../bandages/cart item/CartItem";
import {
  StyledCardItemInfoContainer,
  StyledCardItems,
  StyledTitle,
  StyledTotalAmount,
  StyledTotalAmountContainer,
  StyledTotalAmountLabel,
} from "./CardIteminfoContainerStyles";

export default function CardItemInfoContainer({ cartItems }) {
  return (
    <StyledCardItemInfoContainer>
      <StyledTitle>Your cart</StyledTitle>
      <StyledCardItems>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </StyledCardItems>
      <StyledTotalAmountContainer>
        <StyledTotalAmountLabel>Total cost</StyledTotalAmountLabel>
        <StyledTotalAmount>
          $
          {cartItems.reduce(
            (prevAmount, cartItem) => prevAmount + cartItem.price,
            0
          )}
        </StyledTotalAmount>
      </StyledTotalAmountContainer>
    </StyledCardItemInfoContainer>
  );
}
