import {
  StyledNavbarNavigation,
  StyledNavbarNavigations,
  StyledNavbarNavigationsContainer,
} from "./NavbarStyles";

export default function Navbar() {
  return (
    <StyledNavbarNavigationsContainer>
      <StyledNavbarNavigations>
        <StyledNavbarNavigation>Men</StyledNavbarNavigation>
        <StyledNavbarNavigation>Women</StyledNavbarNavigation>
        <StyledNavbarNavigation>Kids</StyledNavbarNavigation>
      </StyledNavbarNavigations>
    </StyledNavbarNavigationsContainer>
  );
}
