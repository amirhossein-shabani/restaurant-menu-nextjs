import logo from "@/public/img/logo.png";
import Image from "next/image";
import { getSetting } from "../_lib/data-service";

async function Logo() {
  const { logoUrl } = await getSetting();

  return (
    <div className="relative z-10 w-20 h-20 text-white rounded-full max-w-24 aspect-auto sm:-mt-2 lg:-mt-4 ">
      <Image
        src={logoUrl}
        fill
        quality={100}
        alt="logo png"
        className="object-cover rounded-full "
      />
    </div>
  );
}

export default Logo;
