import Image from "next/image";
import { getSetting } from "../_lib/data-service";
import Link from "next/link";

async function Logo() {
  const { logoUrl } = await getSetting();

  return (
    <div className="relative z-10 w-20 h-20 -mt-2 text-white rounded-full max-w-24 aspect-auto sm:-mt-2 lg:-mt-4 ">
      <Link href="/about">
        <Image
          src={logoUrl}
          fill
          quality={100}
          alt="logo png"
          className="object-cover rounded-full "
        />
      </Link>
    </div>
  );
}

export default Logo;
