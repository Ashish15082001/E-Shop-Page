import PersonIcon from "../../icons/PersonIcon";
import SearchIcon from "../../icons/SearchIcon";
import ShoppingCart from "../../icons/ShoppingCartIcon";
import {
  IconNavbarNavigation,
  IconNavbarNavigations,
  IconNavbarNavigationsContainer,
} from "./IconsNavbarStyles";

export default function IconsNavbar() {
  return (
    <IconNavbarNavigationsContainer>
      <IconNavbarNavigations>
        <IconNavbarNavigation>
          <SearchIcon />
        </IconNavbarNavigation>
        <IconNavbarNavigation>
          <ShoppingCart />
        </IconNavbarNavigation>
        <IconNavbarNavigation>
          <PersonIcon />
        </IconNavbarNavigation>
      </IconNavbarNavigations>
    </IconNavbarNavigationsContainer>
  );
}
