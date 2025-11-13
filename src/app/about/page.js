import Image from "next/image";
import about from "@/public/img/about.jpg";

function Page() {
  return (
    <div className="pt-40 max-w-6xl pb-10 mx-auto flex justify-center px-4 2xl:px-0">
      <div className=" bg-yellow-300/20 pb-10 rounded-2xl md:rounded-none md:rounded-r-2xl text-white md:w-1/2 flex flex-col xl:gap-4 px-6 mx-3 md:mx-0  pt-4 flex-1 md:flex-none shadow-xl">
        {/* Address  */}
        <div className="flex flex-col gap-2 xl:gap-4 items-start-center py-4">
          <p className="text-lg font-semibold xl:text-3xl">آدرس ما :</p>
          <p className="xl:text-2xl">
            بلوار معلم ، میدان سرگل , جنب پارک کودک{" "}
          </p>
        </div>
        {/* contact with admin */}
        <div
          className="flex flex-col gap-2 py-4  bg-gray-300/30 px-3  rounded-xl xl:text-xl "
          dir="ltr"
        >
          <p className="px-2 " dir="rtl">
            {" "}
            راه های ارتباطی با ما :
          </p>
          <a href="tel:+989368569768" className="hover:underline ">
            +13 3332 000 00
          </a>
          <a href="tel:+989368569768" className="hover:underline ">
            +98 936 856 9768
          </a>
          <a href="mailto:amseinn20@gmail.com" className="hover:underline ">
            amseinn20@gmail.com
          </a>
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
        className="rounded-xl mt-2 "
      /> */}

        {/* social media  */}
      </div>

      {/* picture section in About  */}
      <div className="hidden sm:flex opacity-90 rounded-l-2xl shadow-xl">
        <Image
          src={about}
          placeholder="blur"
          alt="about image"
          className=" rounded-l-2xl  "
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
