import IconsNavbar from "../icons navbar/IconsNavbar";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import { Header } from "./PageHeaderStyles";

export default function PageHeader() {
  return (
    <Header>
      <Logo />
      <Navbar />
      <IconsNavbar />
    </Header>
  );
}
