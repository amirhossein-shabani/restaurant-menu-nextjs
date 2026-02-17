import Image from "next/image";
import itemBackupImg from "@/public/img/itemBackupImg.png";

function MenuItemDetails({ item }) {
  return (
    <div dir="rtl" className="flex flex-row h-full ">
      <div className="flex flex-col justify-between w-1/2 px-2 py-2 pl-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">{item.name}</h2>
          <p className="text-gray-300">{item.description}</p>
        </div>
        <p className="self-end mt-4 text-lg text-yellow-400">
          {item.price} تومان
        </p>
      </div>
      <div className="relative w-1/2 rounded-xl aspect-square">
        <Image
          fill
          // loader="./public/img/logo.png"
          src={item.imgUrl || itemBackupImg}
          alt="item-img"
          quality={100}
          className="object-contain rounded-xl"
        />
      </div>
    </div>
  );
}

export default MenuItemDetails;
