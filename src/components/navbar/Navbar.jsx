import {
  NavbarNavigation,
  NavbarNavigations,
  NavbarNavigationsContainer,
} from "./NavbarStyles";

export default function Navbar() {
  return (
    <NavbarNavigationsContainer>
      <NavbarNavigations>
        <NavbarNavigation>Men</NavbarNavigation>
        <NavbarNavigation>Women</NavbarNavigation>
        <NavbarNavigation>Kids</NavbarNavigation>
      </NavbarNavigations>
    </NavbarNavigationsContainer>
  );
}
