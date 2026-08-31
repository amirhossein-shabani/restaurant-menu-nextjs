import itemBackupImg from "@/public/img/itemBackupImg.png";
import Image from "next/image";

function MenuItem({ item }) {
  const { name, price, description, imgUrl, is_available } = item;

  return (
    <div
      className={`relative w-full flex items-start gap-3 px-2 py-2 bg-black/15 rounded-md overflow-hidden min-h-[72px] transition duration-150 ${
        is_available ? "hover:scale-[1.02]" : "border border-red-600/50"
      }`}
    >
      {/* Sold out overlay */}
      {!is_available && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black/10">
          <span className="px-3 py-2 text-sm font-bold text-white rounded-md bg-red-700/80">
            تمام شده
          </span>
        </div>
      )}

      {/* Image */}
      <div
        className={`relative flex-shrink-0 w-24 h-24 overflow-hidden bg-gray-800 rounded-md md:w-28 md:h-28 ${
          !is_available && "opacity-50"
        }`}
      >
        <Image
          fill
          src={imgUrl || itemBackupImg}
          alt={name}
          quality={80}
          className="object-cover"
        />

        {/* Subtle dark overlay */}
        {!is_available && (
          <div className="absolute inset-0 pointer-events-none bg-black/20" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 min-w-0 pt-0.5 ${!is_available && "opacity-70"}`}>
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

        {/* Price */}
        <div
          className={`absolute pt-3 pb-0 text-sm font-bold left-2 bottom-1 text-end whitespace-nowrap ${
            is_available ? "text-yellow-400" : "text-yellow-400/60"
          }`}
        >
          {price}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
