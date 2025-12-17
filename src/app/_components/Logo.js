import logo from "@/public/img/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <div className="z-10 text-white sm:-mt-2 lg:-mt-4 ">
      <Image
        src={logo}
        alt="logo png"
        className="object-cover w-20 rounded-full opacity-90 lg:w-24"
      />
    </div>
  );
}

export default Logo;
