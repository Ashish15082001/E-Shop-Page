import Avatar from "../../avatar/Avatar";
import {
  StyledCartItem,
  StyledCartitemName,
  StyledCompany,
  StyledItemId,
  StyledItemInfo,
  StyledLeftPart,
  StyledPrice,
  StyledRightLower,
  StyledRightPart,
  StyledRightUpper,
} from "./CartItemStyles";

export default function CartItem({ imageUrl, itemName, company, price, id }) {
  return (
    <StyledCartItem>
      <StyledLeftPart>
        <Avatar imageUrl={imageUrl} />
      </StyledLeftPart>
      <StyledRightPart>
        <StyledRightUpper>
          <StyledItemInfo>
            <StyledCartitemName>{itemName}</StyledCartitemName>
            <StyledCompany>{company}</StyledCompany>
          </StyledItemInfo>
          <StyledPrice>${price}</StyledPrice>
        </StyledRightUpper>
        <StyledRightLower>
          <StyledItemId>#{id}</StyledItemId>
        </StyledRightLower>
      </StyledRightPart>
    </StyledCartItem>
  );
}
