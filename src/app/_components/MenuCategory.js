import { getCategories } from "../_lib/data-service";
import CategoryItem from "./CategoryItem";

const Setting = [
  {
    id: 1,
    address: "",
    telephonNumber: 0,
    phoneNumber: 0,
    email: "...@gmail.com",
    description: "",
    openTime: "",
    closeTime: "",
    instageramID: "",
    telegramID: "",
    landingHyperText: "",
    logo: "",
    backgroundImageUrl: "",
    beanCoffeeUrl: "",
  },
];

async function MenuCategory() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <section className="flex items-start gap-2 px-2 py-2   overflow-x-auto md:flex-col md:py-2 bg-white/40 rounded-2xl md:h-[80vh] simple-scroll md:overflow-y-scroll md:overflow-x-hidden">
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </section>
  );
}

export default MenuCategory;
