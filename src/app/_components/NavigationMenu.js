"use client";

import { useNav } from "../context/NavProvider";
import Link from "next/link";

import { IoHomeOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

function NavigationMenu() {
  const { closeMenu, isOpen } = useNav();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 backdrop-blur-sm bg-black/20 "
          onClick={closeMenu}
        />
      )}

      <div
        className={`absolute flex items-center gap-x-2 sm:gap-x-4 bg-white/70 z-20 inset-x-16 py-3 text-2xl  rounded-full px-6  justify-around transition-transform duration-300 ease-linear text-gray-800  ${
          isOpen ? "translate-y-2 shadow-yellow-200" : "-translate-y-80"
        }`}
      >
        <Link
          href="/"
          className="flex flex-col items-center justify-center mt-0.5 gap-1.5 group  focus:outline-none "
          onClick={closeMenu}
        >
          <IoHomeOutline className="group-hover:text-gray-900 group-hover:scale-110 transition duration-200 mt-0.5 group-focus:outline-none group-focus:text-black group-focus:scale-110" />
          <span className="navigation-menu-text">خانه</span>
        </Link>
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center mt-0.5 gap-1.5 group pr-2 focus:outline-none "
          onClick={closeMenu}
        >
          <FiCoffee className="group-hover:text-gray-900 group-hover:scale-110 transition duration-200 mt-0.5 group-focus:outline-none group-focus:text-black group-focus:scale-110" />
          <span className="navigation-menu-text">منو</span>
        </Link>
        {/* <Link
          href="/account"
          className="flex flex-col items-center justify-center mt-1 gap-1.5 group  focus:outline-none"
          onClick={closeMenu}
        >
          <MdOutlineAccountCircle className="transition duration-200 group-hover:text-gray-900 group-hover:scale-110 group-focus:outline-none group-focus:text-black group-focus:scale-110" />{" "}
          <span className="navigation-menu-text text-nowrap">حساب کاربر</span>
        </Link> */}
        <Link
          href="/about"
          className="text-xl flex flex-col items-center justify-center mt-2.5 gap-1.5 group focus:outline-none "
          onClick={closeMenu}
        >
          <FaQuestion className="transition duration-200 group-hover:text-gray-900 group-hover:scale-110 group-focus:outline-none group-focus:text-black group-focus:scale-110" />{" "}
          <span className="navigation-menu-text text-nowrap">درباره ما</span>
        </Link>
      </div>
    </>
  );
}

export default NavigationMenu;
