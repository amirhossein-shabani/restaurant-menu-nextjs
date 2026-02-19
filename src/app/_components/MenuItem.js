import itemBackupImg from "@/public/img/itemBackupImg.png";
import Image from "next/image";

function MenuItem({ item }) {
  const { name, price, description, imgUrl } = item;
  // in-work from here
  return (
    <div className="flex justify-center w-full px-2 py-2 text-gray-100 bg-black/30 h-60 rounded-xl hover:scale-[1.02] transition duration-100 ">
      <div className="flex flex-col justify-between w-1/2 gap-2 px-1 py-2 ">
        <div className="flex flex-col gap-2">
          <div
            className={`px-2 pb-1 text-xl font-medium tracking-widest w-fit ${
              description && "border-gray-200/20 border-b "
            } `}
          >
            {name}
          </div>
          {description && (
            <div className="text-sm text-white/60">({description})</div>
          )}
        </div>
        <div className="flex justify-end px-2 text-lg font-bold text-yellow-300/90">
          {price}
        </div>
      </div>

      <div className="relative flex self-center w-1/2 h-full p-0 rounded-xl aspect-square">
        <Image
          fill
          // loader="./public/img/logo.png"
          src={imgUrl || itemBackupImg}
          alt="item-img"
          quality={100}
          className={`object-cover p-0 rounded-xl  `}
        />
      </div>
    </div>
  );
}

export default MenuItem;
