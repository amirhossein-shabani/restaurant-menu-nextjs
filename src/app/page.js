import Image from "next/image";
import bg from "@/public/img/bg.png";
import coffeBean from "@/public/img/coffee-bean.webp";
import Link from "next/link";
import { getSetting } from "./_lib/data-service";

async function Page() {
  const { landingHyperText } = await getSetting();

  return (
    <main className="relative flex flex-col items-center pt-8 sm:pt-40 scroll-smooth md:pt-32">
      <div className="flex justify-start w-full px-2 pt-5 mx-auto text-2xl font-bold text-right text-white md:z-0 sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl md:pt-10 sm:text-3xl md:text-4xl lg:text-5xl lg:px-4">
        <p className="">{landingHyperText}</p>
      </div>
      <div className="flex items-center justify-center ">
        <div className="relative z-30 max-w-lg transition-transform duration-500 ease-in-out md:max-w-l lg:hover:scale-[1.15]">
          <Image
            src={bg}
            alt="background picture"
            placeholder="empty"
            quality={100}
            className="object-cover object-top scale-100 "
          />
          <div
            className={`absolute flex items-center justify-center inset-0 top-52 lg:top-64 left-6 lg:left-8 text-2xl lg:text-4xl `}
          >
            <Link
              href="/menu"
              className="px-10 py-1 font-medium text-white transition duration-200 border-4 border-white rounded-full bg-white/30 lg:bg-transparent sm:px-14 lg:px-8 lg:hover:text-gray-700 lg:hover:bg-white lg:hover:outline-none"
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
          className="object-bottom object-contain md:w-[90%] mx-auto -mt-28 
           sm:-mt-36 md:-mt-[18rem] lg:-mt-[16rem] lg:max-w-6xl xl:-mt-[19rem] 2xl:-mt-[20rem] animate-riseUp delay-300 ease-in-out  "
          alt="coffe-bean "
        />
      </div>
    </main>
  );
}

export default Page;
