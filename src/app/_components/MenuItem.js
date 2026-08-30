import itemBackupImg from "@/public/img/itemBackupImg.png";
import Image from "next/image";

function MenuItem({ item }) {
  const { name, price, description, imgUrl } = item;

  return (
    <div
      className={`w-full flex items-start gap-3 px-2 py-2 bg-black/15 rounded-md hover:scale-[1.02] transition duration-150 overflow-hidden min-h-[72px] relative`}
    >
      <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden bg-gray-800 rounded-md md:w-28 md:h-28">
        <Image
          fill
          src={imgUrl || itemBackupImg}
          alt={name}
          quality={80}
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0 pt-0.5 ">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-base font-medium text-white truncate sm:text-base">
            {name}
          </h4>
        </div>

        {description && (
          <p className="mt-1 text-xs text-white/70 sm:text-sm line-clamp-2">
            {description}
          </p>
        )}
        <div className="absolute pt-3 pb-0 text-sm font-bold text-yellow-400 left-2 bottom-1 text-end whitespace-nowrap">
          {price}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
