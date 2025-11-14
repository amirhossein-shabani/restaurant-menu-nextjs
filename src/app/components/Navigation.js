import Link from "next/link";
import { vazirmatnLight } from "../layout";

function Navigation() {
  return (
    <nav
      className={`hidden sm:flex sm:items-center  gap-1 text-sm text-white bg-black/30 rounded-full px-2 md:text-xl lg:text-2xl 
      ${vazirmatnLight.className}`}
    >
      <Link
        href="/"
        className="px-4 py-2 transition-all duration-200 rounded-full hover:bg-white hover:text-slate-600 focus:text-slate-600 focus:bg-white focus:ring-0 focus:outline-none "
      >
        خانه
      </Link>
      <Link
        href="/menu"
        className="px-4 py-2 transition-all duration-200 rounded-full hover:bg-white hover:text-slate-600 focus:bg-white focus:text-slate-600 focus:ring-0 focus:outline-none"
      >
        منو
      </Link>
      <Link
        href="/account"
        className="px-4 py-2 transition-all duration-200 rounded-full hover:bg-white hover:text-slate-600 focus:bg-white focus:text-slate-600 focus:ring-0 focus:outline-none"
      >
        حساب کاربر
      </Link>
      <Link
        href="/about"
        className="px-4 py-2 transition-all duration-200 rounded-full hover:bg-white hover:text-slate-600 focus:bg-white focus:text-slate-600 focus:ring-0 focus:outline-none"
      >
        درباره ما
      </Link>
    </nav>
  );
}

export default Navigation;
