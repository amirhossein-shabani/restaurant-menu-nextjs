import Image from "next/image";
import bg from "@/public/img/bg.png";
import { vazirmatnBold } from "./layout";
import Link from "next/link";

function Page() {
  return (
    <div className="mt-20 flex items-center justify-center">
      <div className=" max-w-lg md:max-w-xl transition-transform duration-500 lg:hover:scale-110 relative -mt-20">
        <Image
          src={bg}
          alt="background picture"
          quality={100}
          className="object-cover object-top  "
        />
        <div
          className={`absolute flex items-center justify-center inset-0 top-52 lg:top-64 left-3 lg:left-4 text-3xl lg:text-3xl `}
        >
          <Link
            href="/menu"
            className=" border-4 border-white bg-white/30  lg:bg-transparent text-white px-10 sm:px-14 lg:px-8 py-1 rounded-full lg:hover:text-gray-700 lg:hover:bg-white transition duration-200 lg:hover:outline-none font-medium "
          >
            منوی کافه
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
