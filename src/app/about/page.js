import Image from "next/image";
import about from "@/public/img/about.jpg";
import { FaInstagram, FaPhone, FaTelegram } from "react-icons/fa6";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";

function Page() {
  return (
    <div className="flex justify-center max-w-6xl px-4 pb-10 mx-auto sm:pt-40 2xl:px-0">
      <div className="flex flex-col flex-1 px-6 pt-4 pb-10 mx-3 text-white shadow-xl bg-yellow-300/20 rounded-2xl lg:rounded-none lg:rounded-r-2xl lg:w-1/2 xl:gap-4 lg:mx-0 lg:flex-none">
        {/* Address  */}
        <div className="flex flex-col gap-2 py-4 xl:gap-4 items-start-center">
          <p className="text-lg font-semibold xl:text-3xl">آدرس ما :</p>
          <p className="xl:text-2xl">
            بلوار معلم ، میدان سرگل , جنب پارک کودک{" "}
          </p>
        </div>
        {/* contact with admin */}
        <div
          className="flex flex-col gap-2 px-3 py-4 bg-gray-300/30 rounded-xl xl:text-xl "
          dir="ltr"
        >
          <p className="px-2 " dir="rtl">
            {" "}
            راه های ارتباطی با ما :
          </p>
          <div className="flex flex-row gap-2">
            <span>
              <FaPhone />
            </span>
            <a href="tel:+989368569768" className="hover:underline ">
              +13 3332 000 00
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <span>
              <MdPhoneAndroid />
            </span>

            <a href="tel:+989368569768" className="hover:underline ">
              +98 936 856 9768
            </a>
          </div>

          <div className="flex flex-row gap-2">
            <span>
              <MdEmail />
            </span>
            <a href="mailto:amseinn20@gmail.com" className="hover:underline ">
              amseinn20@gmail.com
            </a>
          </div>

          {/* instageram id : */}
          {/* <a
          href="mailto:amseinn20@gmail.com"
          dir="ltr"
          className="hover:underline "
        >
          amseinn20@gmail.com
        </a> */}
          {/* telegram id : */}
          {/* <a
          href="mailto:amseinn20@gmail.com"
          dir="ltr"
          className="hover:underline "
        >
          amseinn20@gmail.com
        </a> */}
        </div>

        {/* map for location */}
        {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d198.3888167113025!2d49.5741238601197!3d37.28989415111152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401fd9007f366b01%3A0xfd8d687a5c34fe74!2sOris%20cafe!5e0!3m2!1sen!2sus!4v1763035753914!5m2!1sen!2sus"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="mt-2 rounded-xl "
      /> */}

        {/* dsecription  */}
        <div className="p-2 pt-5 text-xs leading-relaxed text-white whitespace-pre-line md:text-xl ">
          {`کافه ما با هدف خلق فضایی آرام و دل‌پذیر برای علاقه‌مندان به قهوه تأسیس شد.
ترکیب کیفیت، سادگی و حس خوب، فلسفه‌ی اصلی ماست.
از انتخاب دانه‌های قهوه تا آماده‌سازی هر فنجان، همه‌چیز با دقت و عشق انجام می‌شود.

ما باور داریم که کافه فقط جایی برای نوشیدن قهوه نیست؛ بلکه مکانی است برای گفتگو، الهام و لحظه‌ای رهایی از شلوغی روزمره.
در این فضا تلاش کرده‌ایم تا گرمای صمیمیت را با عطر قهوه و موسیقی دل‌نشین درهم بیامیزیم.
منوی ما با دقت و سلیقه طراحی شده تا پاسخ‌گوی هر سلیقه‌ای باشد — از قهوه‌های کلاسیک گرفته تا نوشیدنی‌ها و دسرهای خاص.

هر بار که به ما سر می‌زنید، هدفمان این است که تجربه‌ای تازه و لذت‌بخش برایتان بسازیم؛ تجربه‌ای که مزه‌اش تا مدت‌ها در خاطر بماند.

نظرات، پیشنهادها و نقدهای ارزشمندتان را نیز با خوشحالی از طریق راه‌های ارتباطی درج‌شده با ما در میان بگذارید — ما همیشه مشتاق شنیدن صدای شما هستیم.`}
        </div>

        {/* social media  */}
        <div className="flex justify-center gap-3 mt-8 lg:justify-end ">
          <a href="https://www.instagram.com/oris.cafe/" target="_blank">
            <span className="text-lg md:text-3xl">
              <FaInstagram />
            </span>
          </a>
          <a href="https://t.me/Mr_rahnama" target="_blank">
            <span className="text-lg md:text-3xl">
              <FaTelegram />
            </span>
          </a>
        </div>
      </div>

      {/* picture section in About  */}
      <div className="hidden shadow-xl lg:flex opacity-90 rounded-l-2xl">
        <Image
          src={about}
          placeholder="blur"
          alt="about image"
          className=" rounded-l-2xl"
        ></Image>
      </div>
    </div>
  );
}

export default Page;

// i have to fixed the font size in the diffrent screen size and add the coffeeshop photo on the left side in large screen .

// add the social media in the bottom of the box

// add the about text in the center

// and if you want or have time add the map for the coffee shop location
