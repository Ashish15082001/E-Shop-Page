import KidIcon from "../../icons/KidIcon";
import MenIcon from "../../icons/MenIcon";
import MenuIcon from "../../icons/MenuIcon";
import PersonIcon from "../../icons/PersonIcon";
import SearchIcon from "../../icons/SearchIcon";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon";
import WomenIcon from "../../icons/WomenIcon";
import IconsNavbar from "../icons navbar/IconsNavbar";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import {
  StyledHeader,
  StyledMenu,
  StyledMenuIconContainer,
  StyledMenuIconText,
  StyledMenuOption,
  StyledMenuOptions,
} from "./PageHeaderStyles";

export default function PageHeader() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <IconsNavbar />
      <StyledMenu>
        <StyledMenuIconContainer>
          <MenuIcon />
        </StyledMenuIconContainer>
        <StyledMenuOptions>
          <StyledMenuOption>
            <StyledMenuIconContainer>
              <MenIcon />
            </StyledMenuIconContainer>
            <StyledMenuIconText>Men</StyledMenuIconText>
          </StyledMenuOption>
          <StyledMenuOption>
            <StyledMenuIconContainer>
              <WomenIcon />
            </StyledMenuIconContainer>
            <StyledMenuIconText>Women</StyledMenuIconText>
          </StyledMenuOption>
          <StyledMenuOption>
            <StyledMenuIconContainer>
              <KidIcon />
            </StyledMenuIconContainer>
            <StyledMenuIconText>Kids</StyledMenuIconText>
          </StyledMenuOption>
          <StyledMenuOption>
            <StyledMenuIconContainer>
              <SearchIcon />
            </StyledMenuIconContainer>
            <StyledMenuIconText>Search</StyledMenuIconText>
          </StyledMenuOption>
          <StyledMenuOption>
            <StyledMenuIconContainer>
              <ShoppingCartIcon />
            </StyledMenuIconContainer>
            <StyledMenuIconText>Cart</StyledMenuIconText>
          </StyledMenuOption>
          <StyledMenuOption>
            <StyledMenuIconContainer>
              <PersonIcon />
            </StyledMenuIconContainer>
            <StyledMenuIconText>Account</StyledMenuIconText>
          </StyledMenuOption>
        </StyledMenuOptions>
      </StyledMenu>
    </StyledHeader>
  );
}
