import { getCategories } from "../_lib/data-service";
import CategoryItem from "./CategoryItem";

async function MenuCategory() {
  const categories = await getCategories();

  return (
    <section className="flex w-full items-start gap-2 p-2 overflow-x-auto md:flex-col md:py-2 bg-black/20 rounded-2xl md:max-h-[72vh] simple-scroll md:overflow-y-auto md:overflow-x-hidden group">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </section>
  );
}

export default MenuCategory;
