import { getCategories, getMenuItems } from "../_lib/data-service";
import MenuItem from "./MenuItem";
import MenuItemTrigger from "./MenuItemTrigger";

async function MenuItemsContainer() {
  const menuItems = await getMenuItems();
  const categories = await getCategories();

  console.log(menuItems);
  console.log(categories);

  return (
    <section
      dir="rtl"
      className="grid col-span-2 w-full h-[54vh] md:h-[80vh] gap-2 p-2 overflow-y-scroll bg-black/20 rounded-2xl scrollbar-thin simple-scroll scroll-smooth"
    >
      {categories.map((category) => {
        // فقط آیتم‌های همین category
        const categoryItems = menuItems.filter(
          (item) => item.tag === category.href,
        );

        if (categoryItems.length === 0) return null;

        return (
          <div key={category.id} id={category.href} className="w-full">
            <h2 className="pr-2 my-4 text-xl font-semibold text-gray-100">
              {category.categoryTitle || category.title || category.name}
            </h2>

            <div className="grid gap-2 mb-2 md:grid-cols-2">
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
