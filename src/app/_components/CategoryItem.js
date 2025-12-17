import Image from "next/image";

function CategoryItem({ category }) {
  const { categoryTitle, href, imgUrl } = category;
  console.log(imgUrl);

  return (
    <a href={"#" + href} className="w-full">
      <div className="flex flex-col flex-none w-[140px] h-[200px] md:w-full md:h-[110px]  px-1 py-2 text-center text-white md:flex-row md:px-2 bg-black/10 rounded-xl">
        <div className="relative w-[90%] -mr-2 aspect-square md:w-fit ">
          <Image
            src={imgUrl}
            fill
            alt="the cake and deserts category img"
            className="object-cover pr-4 scale-90 lg:scale-110 opacity-85"
            quality={70}
          />
        </div>

        <div className="flex flex-col self-center justify-center w-full h-full p-2 text-xl font-bold text-gray-800/90">
          {categoryTitle}
        </div>
      </div>
    </a>
  );
}

export default CategoryItem;
