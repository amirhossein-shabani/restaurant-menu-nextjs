import Image from "next/image";
import bg from "@/public/img/bg.png";
import coffeBean from "@/public/img/coffee-bean.webp";
import Link from "next/link";
import { getSetting } from "./_lib/data-service";

async function Page() {
  const { landingHyperText } = await getSetting();

  return (
    <main className="relative flex flex-col items-center pt-8 sm:pt-32 scroll-smooth md:pt-24">
      <div className="flex justify-center w-full px-2 pt-2 mx-auto text-xl font-bold text-right text-white md:z-0 sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:pt-10 sm:text-2xl md:text-3xl lg:text-4xl lg:px-4">
        <p className="">{landingHyperText}</p>
      </div>
      <div className="flex items-center justify-center ">
        <div className="relative z-30 max-w-lg transition-transform duration-500 ease-in-out md:max-w-sm lg:hover:scale-[1.15] sm:max-w-xs">
          <Image
            src={bg}
            alt="background picture"
            placeholder="empty"
            quality={100}
            className="object-cover object-top scale-100 "
          />
          <div
            className={`absolute flex items-center justify-center inset-0 top-52 lg:top-64 left-6 lg:left-8 text-2xl sm:text-base md:text-xl `}
          >
            <Link
              href="/menu"
              className="px-10 py-1 font-medium text-white transition duration-200 border-4 border-white rounded-full bg-white/30 lg:bg-transparent sm:px-10 md:px-8 lg:hover:text-gray-700 lg:hover:bg-white lg:hover:outline-none"
            >
              منوی کافه
            </Link>
          </div>
        </div>
      </div>
      <div className="opacity-80 -z-10">
        <Image
          src={coffeBean}
          quality={80}
          className="object-bottom object-contain md:w-[70%] mx-auto sm:w-[80%] -mt-28 sm:-mt-40 md:-mt-[15rem] lg:-mt-[16rem] lg:max-w-4xl xl:-mt-[16rem] 2xl:-mt-[16rem]   animate-riseUp delay-500 ease-in-out  "
          alt="coffe-bean "
        />
      </div>
      <div className="flex items-center justify-center w-full pl-6 text-sm text-gray-700 sm:-mt-10 md:-mt-16 ">
        <p className="py-2"> ساعت سرویس دهی 08:00 صبح تا 24:00 شب</p>
      </div>
    </main>
  );
}

export default Page;

// for know this is enough but the position of the div in this landing page not currect and in the diffrent size may broke or not seeing well and for that i have to change this page another time so well .
