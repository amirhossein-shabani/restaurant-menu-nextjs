import Image from "next/image";
import bg from "@/public/img/bg.png";
import coffeBean from "@/public/img/coffee-bean-3.png";
import Link from "next/link";

function Page() {
  return (
    <main className="relative flex flex-col  scroll-smooth">
      <div className="  flex items-center justify-center ">
        <div className=" relative max-w-lg md:max-w-xl transition-transform duration-500 lg:hover:scale-110 ease-in-out  ">
          <Image
            src={bg}
            alt="background picture"
            placeholder="empty"
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
      <div className="opacity-60 -z-10">
        <Image
          src={coffeBean}
          className="object-bottom object-contain mx-auto  -mt-32 sm:-mt-40 md:-mt-80 lg:-mt-96 lg:max-w-6xl xl:-mt-[30rem] 2xl:-mt-[35rem] animate-riseUp animation-delay-200 ease-in-out  "
          alt="coffe-bean "
        />
      </div>
    </main>
  );
}

export default Page;
