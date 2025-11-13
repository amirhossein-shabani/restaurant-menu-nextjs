import Logo from "./Logo";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";
import NavProvider from "../context/NavProvider";
import NavigationMenu from "./NavigationMenu";
import HeaderShadow from "./HeaderShadow";

function Header() {
  return (
    <HeaderShadow>
      <Logo />
      <Navigation />
      {/* hamburger menu */}
      <NavProvider>
        <div className="absolute z-20 text-white top-7 right-5 sm:hidden">
          <HamburgerMenu />
        </div>
        <NavigationMenu />
      </NavProvider>
    </HeaderShadow>
  );
}

export default Header;

// fix the scroll situation for the navbar - remove the conflict with backgournd
