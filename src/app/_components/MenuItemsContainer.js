import { getCategories, getMenuItems } from "../_lib/data-service";
import MenuItem from "./MenuItem";

async function MenuItemsContainer() {
  const menuItems = await getMenuItems();
  const categories = await getCategories();

  // build a lookup map for categories (normalize keys, include `href`)
  const categoryMap = (categories || []).reduce((acc, c) => {
    const possibleKeys = [
      c.tag,
      c.href,
      c.slug,
      c.id,
      c.name,
      c.title,
      c.categoryTitle,
    ];
    possibleKeys
      .filter(Boolean)
      .map((k) => String(k).toLowerCase())
      .forEach((k) => {
        if (!acc[k]) acc[k] = c;
      });
    return acc;
  }, {});

  // group items by tag
  const grouped = menuItems.reduce((acc, item) => {
    const t = item.tag || "سایر";
    if (!acc[t]) acc[t] = [];
    acc[t].push(item);
    return acc;
  }, {});

  return (
    <section
      dir="rtl"
      className="grid col-span-2 w-full h-[54vh] md:h-[80vh] gap-2 p-2 overflow-y-scroll bg-black/20 rounded-2xl   scrollbar-thin simple-scroll scroll-smooth"
    >
      {Object.entries(grouped).map(([tag, items]) => {
        const lookupKey = String(tag || "").toLowerCase();
        const cat = categoryMap[lookupKey];
        const title = cat?.categoryTitle || cat?.title || cat?.name || tag;
        return (
          <div key={tag} className="w-full" id={tag}>
            <h2 className="pr-2 my-4 text-xl font-semibold text-gray-100 myt-2">
              {title}
            </h2>
            <div className="grid gap-2 mb-2 gird-col md:grid-cols-2">
              {items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default MenuItemsContainer;
