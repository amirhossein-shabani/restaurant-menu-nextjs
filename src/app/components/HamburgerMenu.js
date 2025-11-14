"use client";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { useNav } from "../context/NavProvider";

function HamburgerMenu() {
  const { toggleMenu, isOpen } = useNav();
  return (
    <button
      className="w-12 mt-6 text-white focus:outline-none"
      onClick={toggleMenu}
    >
      {isOpen ? <FaXmark /> : <MdMenu />}
    </button>
  );
}

export default HamburgerMenu;
