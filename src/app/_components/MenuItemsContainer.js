import { getMenuItems } from "../_lib/data-service";
import MenuItem from "./MenuItem";

async function MenuItemsContainer() {
  const menuItems = await getMenuItems();
  console.log(menuItems);

  return (
    <section
      dir="rtl"
      className="grid h-[54vh] md:h-[80vh] gap-2 p-2 overflow-y-scroll bg-white/40 rounded-2xl  md:grid-cols-2 scrollbar-thin simple-scroll md:col-span-2 "
    >
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </section>
  );
}

export default MenuItemsContainer;
