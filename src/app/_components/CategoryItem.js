import { scale } from "framer-motion";
import Image from "next/image";

function CategoryItem({ category }) {
  const { categoryTitle, href, imgUrl, landingImageUrl } = category;

  return (
    <a href={"#" + href} className="w-full ">
      <div className="flex flex-col flex-none w-[140px] h-[220px] md:w-full md:h-[110px] pt-4 md:px-2 md:py-4 text-center text-white md:flex-row bg-black/20 rounded-xl hover:scale-[1.02] transition duration-100">
        {/* IMAGE CONTAINER */}
        <div
          className={`relative flex items-center justify-center self-center w-[90%] aspect-square md:w-[110px]  `}
        >
          {imgUrl && (
            <Image
              src={landingImageUrl ? landingImageUrl : imgUrl}
              fill
              alt={categoryTitle}
              className={`flex items-start justify-start object-contain rounded-lg opacity-90`}
              quality={100}
            />
          )}
        </div>

        {/* TITLE */}
        <div className="flex flex-col self-center justify-center w-full h-full p-2 text-lg font-bold text-gray-200">
          {categoryTitle}
        </div>
      </div>
    </a>
  );
}

export default CategoryItem;
