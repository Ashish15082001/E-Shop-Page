import IconsNavbar from "../icons navbar/IconsNavbar";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import { StyledHeader } from "./PageHeaderStyles";

export default function PageHeader() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <IconsNavbar />
    </StyledHeader>
  );
}
