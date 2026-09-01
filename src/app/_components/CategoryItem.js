import { scale } from "framer-motion";
import Image from "next/image";

function CategoryItem({ category }) {
  const { categoryTitle, href, imgUrl, landingImageUrl } = category;

  return (
    <a href={"#" + href} className="w-full ">
      <div className="flex flex-col flex-none w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-full md:h-[96px] pt-3 md:px-2 md:py-3 text-center text-white md:flex-row bg-black/20 rounded-xl hover:scale-[1.02] transition duration-150">
        {/* IMAGE CONTAINER */}
        <div
          className={`relative flex items-center justify-center self-center w-[84%] aspect-square md:w-[96px] lg:w-[110px]  `}
        >
          <Image
            src={imgUrl ? imgUrl : landingImageUrl}
            fill
            alt={categoryTitle}
            className={`flex items-start justify-start object-contain rounded-lg opacity-90`}
            quality={100}
          />
        </div>

        {/* TITLE */}
        <div className="flex flex-col self-center justify-center w-full h-full p-2 text-sm font-semibold text-gray-200 sm:text-base md:text-lg">
          <span className="truncate">{categoryTitle}</span>
        </div>
      </div>
    </a>
  );
}

export default CategoryItem;
