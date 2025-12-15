function CategoryItem() {
  return (
    <div className="flex flex-col w-full h-full px-1 py-2 text-center text-white md:flex-row md:px-2 bg-black/10 rounded-xl">
      <div className="w-full px-2 py-6 rounded-lg md:w-1/2 h-1/2 md:h-full bg-black/20">
        عکس
      </div>
      <div className="w-full px-2 py-6 md:w-1/2 h-1/2 md:h-full">
        عنوان کتگوری
      </div>
    </div>
  );
}

export default CategoryItem;
