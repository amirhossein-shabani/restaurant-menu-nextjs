import Link from "next/link";
import { vazirmatnLight } from "../layout";

function Navigation() {
  return (
    <nav
      className={`hidden sm:flex items-center gap-1 text-sm text-white bg-black/30 rounded-full px-2 lg:text-lg py-1.5
      ${vazirmatnLight.className}`}
    >
      <Link
        href="/"
        className="hover:bg-white hover:text-slate-600 rounded-full px-4 py-2 transition-all duration-200 focus:text-slate-600 focus:bg-white focus:ring-0 focus:outline-none "
      >
        خانه
      </Link>
      <Link
        href="/menu"
        className="hover:bg-white hover:text-slate-600 rounded-full px-4 py-2 transition-all duration-200 focus:bg-white focus:text-slate-600 focus:ring-0 focus:outline-none"
      >
        منو
      </Link>
      <Link
        href="/account"
        className="hover:bg-white hover:text-slate-600 rounded-full px-4 py-2 transition-all duration-200 focus:bg-white focus:text-slate-600 focus:ring-0 focus:outline-none"
      >
        حساب کاربر
      </Link>
      <Link
        href="/about"
        className="hover:bg-white hover:text-slate-600 rounded-full px-4 py-2 transition-all duration-200 focus:bg-white focus:text-slate-600 focus:ring-0 focus:outline-none"
      >
        درباره ما
      </Link>
    </nav>
  );
}

export default Navigation;
