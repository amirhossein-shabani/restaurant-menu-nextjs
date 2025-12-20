import Image from "next/image";

function CategoryItem({ category }) {
  const { categoryTitle, href, imgUrl } = category;

  return (
    <a href={"#" + href} className="w-full">
      <div className="flex flex-col flex-none w-[140px] h-[220px] md:w-full md:h-[110px] px-1 py-2 text-center text-white md:flex-row md:px-2 bg-black/20 rounded-xl">
        {/* IMAGE CONTAINER */}
        <div className="relative flex items-center justify-center w-full aspect-square md:w-[90px]">
          <Image
            src={imgUrl}
            fill
            alt={categoryTitle}
            unoptimized
            className="flex items-start justify-start object-contain rounded-lg opacity-85 "
            quality={70}
          />
        </div>

        {/* TITLE */}
        <div className="flex flex-col self-center justify-center w-full h-full p-2 text-xl font-bold text-gray-200">
          {categoryTitle}
        </div>
      </div>
    </a>
  );
}

export default CategoryItem;
