import Image from "next/image";
import itemBackupImg from "@/public/img/itemBackupImg.png";

function MenuItemDetails({ item }) {
  return (
    <div className="flex flex-col overflow-hidden transition-colors duration-300 md:flex-row-reverse rounded-2xl backdrop-blur-sm hover:bg-white/10">
      <div className="relative flex-shrink-0 w-full h-64 overflow-hidden border-b md:w-1/2 md:h-80 border-white/10">
        <Image
          src={item.imgUrl || itemBackupImg}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 gap-2 p-4">
        <div>
          <h3 className="pb-2 text-2xl font-medium text-white">{item.name}</h3>
          {item.description && (
            <p className="pb-4 mt-1 font-sans text-lg font-thin text-white/90 line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex items-center justify-end w-full">
          <span className="text-2xl font-bold text-yellow-400">
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuItemDetails;
