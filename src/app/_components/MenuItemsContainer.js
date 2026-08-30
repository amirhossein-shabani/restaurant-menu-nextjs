import { getCategories, getMenuItems } from "../_lib/data-service";
import MenuItem from "./MenuItem";
import MenuItemTrigger from "./MenuItemTrigger";

async function MenuItemsContainer() {
  const menuItems = await getMenuItems();
  const categories = await getCategories();

  return (
    <section
      dir="rtl"
      className="grid col-span-2 w-full max-h-[72vh] gap-3 p-3 overflow-y-auto bg-black/20 rounded-2xl scrollbar-thin simple-scroll scroll-smooth overflow-x-hidden"
    >
      {categories.map((category) => {
        // فقط آیتم‌های همین category
        const categoryItems = menuItems.filter(
          (item) => item.tag === category.href,
        );

        if (categoryItems.length === 0) return null;

        return (
          <div key={category.id} id={category.href} className="w-full">
            <div className="flex items-center justify-between pr-2 my-4">
              <h2 className="px-3 py-1 text-xl font-semibold text-gray-100 border rounded-full border-gray-200/20 bg-white/5">
                {category.categoryTitle || category.title || category.name}
              </h2>

              <div className="ml-1 text-sm text-gray-300">
                {categoryItems.length} آیتم
              </div>
            </div>

            <div className="h-px mb-3 bg-white/5" />

            <div className="grid grid-cols-1 gap-3 mb-2 sm:grid-cols-2 md:grid-cols-2 ">
              {categoryItems.map((item) => (
                <MenuItemTrigger key={item.id} item={item}>
                  <MenuItem item={item} />
                </MenuItemTrigger>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default MenuItemsContainer;
