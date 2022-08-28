import PersonIcon from "../../icons/PersonIcon";
import SearchIcon from "../../icons/SearchIcon";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon";
import {
  StyledIconNavbarNavigation,
  StyledIconNavbarNavigations,
  StyledIconNavbarNavigationsContainer,
} from "./IconsNavbarStyles";

export default function IconsNavbar() {
  return (
    <StyledIconNavbarNavigationsContainer>
      <StyledIconNavbarNavigations>
        <StyledIconNavbarNavigation>
          <SearchIcon />
        </StyledIconNavbarNavigation>
        <StyledIconNavbarNavigation>
          <ShoppingCartIcon />
        </StyledIconNavbarNavigation>
        <StyledIconNavbarNavigation>
          <PersonIcon />
        </StyledIconNavbarNavigation>
      </StyledIconNavbarNavigations>
    </StyledIconNavbarNavigationsContainer>
  );
}
