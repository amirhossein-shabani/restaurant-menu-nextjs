import Image from "next/image";
import bg from "@/public/img/bg.png";
import coffeBean from "@/public/img/coffee-bean.webp";
import Link from "next/link";

function Page() {
  return (
    <main className="relative flex flex-col sm:pt-20 md:pt-32 scroll-smooth ">
      <div className="flex justify-start w-full max-w-6xl px-2 mx-auto text-2xl font-bold text-right text-white md:pt-10 sm:text-3xl md:text-4xl lg:text-5xl lg:px-4 ">
        <p className="">جایی که هر فنجان، تجربه‌ای متفاوت است</p>
      </div>
      <div className="flex items-center justify-center ">
        <div className="relative z-30 max-w-lg transition-transform duration-500 ease-in-out md:max-w-xl lg:hover:scale-110">
          <Image
            src={bg}
            alt="background picture"
            placeholder="empty"
            quality={100}
            className="object-cover object-top "
          />
          <div
            className={`absolute flex items-center justify-center inset-0 top-52 lg:top-64 left-3 lg:left-4 text-3xl lg:text-3xl `}
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
      <div className="opacity-50 -z-10">
        <Image
          src={coffeBean}
          className="object-bottom object-contain mx-auto  -mt-32 sm:-mt-40 md:-mt-80 lg:-mt-96 lg:max-w-6xl xl:-mt-[30rem] 2xl:-mt-[35rem] animate-riseUp delay-500 ease-in-out  "
          alt="coffe-bean "
        />
      </div>
    </main>
  );
}

export default Page;
