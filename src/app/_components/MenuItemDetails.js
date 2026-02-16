function MenuItemDetails({ item }) {
  return (
    <div dir="rtl">
      <h2 className="mb-4 text-2xl font-bold text-white">{item.name}</h2>
      <p className="text-gray-300">{item.description}</p>
      <p className="mt-4 text-lg text-yellow-400">{item.price} تومان</p>
    </div>
  );
}

export default MenuItemDetails;
