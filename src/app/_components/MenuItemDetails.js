import Image from "next/image";
import itemBackupImg from "@/public/img/itemBackupImg.png";

function MenuItemDetails({ item }) {
  return (
    <div
      dir="rtl"
      className="w-full max-w-xl mx-auto overflow-hidden border shadow-2xl rounded-2xl border-white/10 bg-zinc-950/90 shadow-black/40 backdrop-blur-xl"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={item.imgUrl || itemBackupImg}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, 576px"
          className="object-cover"
        />

        {/* Image gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`p-4 py-5 sm:p-6 sm:py-6 ${!item.description && "pb-10"}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-white sm:text-2xl">
              {item.name}
            </h3>

            {item.description && (
              <p className="mt-3 text-sm leading-7 sm:text-base text-white/65">
                {item.description}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="flex-shrink-0 px-3 pt-1 border rounded-xl text-start border-yellow-400/20 bg-yellow-400/10">
            <span className="block text-base font-bold text-yellow-400 ">
              {item.price} تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemDetails;
