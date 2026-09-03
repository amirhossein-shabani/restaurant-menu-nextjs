import itemBackupImg from "@/public/img/itemBackupImg.png";
import Image from "next/image";

function MenuItem({ item }) {
  const { name, price, description, imgUrl, is_available } = item;

  return (
    <div
      tabIndex={is_available ? 0 : -1}
      className={`group relative w-full flex items-start gap-3 px-1.5 py-1.5 rounded-[0.5rem] overflow-hidden min-h-[72px] transition-all duration-200 outline-none ${
        is_available
          ? "bg-black/15 hover:scale-[1.01] hover:bg-black/25 focus:scale-[1.01] focus:bg-black/25 cursor-pointer"
          : "bg-black/20"
      }`}
    >
      {/* Image */}
      <div
        className={`relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-md bg-gray-800 md:w-28 md:h-28 ${
          !is_available && "grayscale"
        }`}
      >
        <Image
          fill
          src={imgUrl || itemBackupImg}
          alt={name}
          quality={80}
          className="object-cover"
        />

        {/* Sold out overlay */}
        {!is_available && (
          <>
            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="px-2.5 py-1 text-[11px] font-medium text-white/90 border border-white/30 rounded-full bg-black/40 backdrop-blur-[2px]">
                تمام شده
              </span>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-0.5">
        {/* Name */}
        <h4
          className={`text-base font-medium truncate ${
            is_available ? "text-white" : "text-white/75"
          }`}
        >
          {name}
        </h4>

        {/* Description */}
        {description && (
          <p
            className={`mt-1 text-xs sm:text-sm line-clamp-2 ${
              is_available ? "text-white/70" : "text-white/45"
            }`}
          >
            {description}
          </p>
        )}

        {/* Price */}
        <div
          className={`flex flex-row-reverse absolute left-2 pt-1 px-2 rounded-md bottom-2 whitespace-nowrap text-sm font-bold border border-yellow-400/20 bg-yellow-400/10 ${
            is_available ? "text-yellow-400" : "text-yellow-400/40"
          }`}
        >
          <span>{price}</span>
          <span className="pl-1 text-[10px]">T</span>
        </div>
      </div>

      {/* View overlay */}
      {is_available && (
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            bg-[#270400]/20
            backdrop-blur-[2px]
            opacity-0
            transition-all duration-200
            group-hover:opacity-100
            group-focus-within:opacity-100
            rounded-[7.5px]
          "
        >
          <span
            className="
              flex items-center gap-1.5
              px-3 py-1.5
              rounded-full
              border border-white/20
              bg-white/10
              text-sm font-medium text-white
              shadow-lg
              backdrop-blur-md
              translate-y-1
              transition-transform duration-200
              group-hover:translate-y-0
              group-focus-within:translate-y-0
            "
          >
            مشاهده
          </span>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
