import logo from "@/public/img/coffee-logo.png";
import Image from "next/image";

function Logo() {
  return (
    <div className="text-white  flex  items-center gap-1 font-bold tracking-wider z-10  text-4xl sm:text-5xl  md:-pt-4 lg:pt-2 lg:text-5xl ">
      Coffee
      <Image src={logo} alt="logo png" width={90} className="" />
    </div>
  );
}

export default Logo;
