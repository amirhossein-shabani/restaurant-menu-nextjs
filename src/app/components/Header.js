import Logo from "./Logo";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";
import NavProvider from "../context/NavProvider";
import NavigationMenu from "./NavigationMenu";

function Header() {
  return (
    <header className="fixed inset-x-0 flex item-center text-3xl justify-center flex-row-reverse max-w-6xl mx-auto py-6 px-4 sm:justify-between md:text-4xl md:pt-8 z-40">
      <Logo />
      <Navigation />
      {/* hamburger menu */}
      <NavProvider>
        <div className="absolute top-7 right-5 text-white sm:hidden  z-20">
          <HamburgerMenu />
        </div>
        <NavigationMenu />
      </NavProvider>
    </header>
  );
}

export default Header;
