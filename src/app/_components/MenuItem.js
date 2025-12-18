function MenuItem({ item }) {
  const { name, price, description, imgUrl } = item;
  // in-work from here
  return (
    <div className="flex justify-center w-full px-2 py-2 text-gray-100 bg-black/30 h-60 rounded-xl ">
      <div className="flex flex-col justify-between w-1/2 gap-2 px-1 py-2 ">
        <div className="flex flex-col gap-2">
          <div
            className={`px-2 pb-1 text-base font-base tracking-widest w-fit ${
              description && "border-gray-200/20 border-b "
            } `}
          >
            {name}
          </div>
          {description && <div className="text-sm">({description})</div>}
        </div>
        <div className="flex justify-end px-2 text-xl font-bold text-gray-50">
          {price}
        </div>
      </div>
      <div className="w-1/2 h-full px-2 rounded-lg bg-black/40">{imgUrl}</div>
    </div>
  );
}

export default MenuItem;
