import CategoryItem from "./CategoryItem";

const menu = [
  {
    id: 1,
    categoryTitle: "نوشیدنی گرم",
    href: "hot-coffee",
    items: [
      {
        id: 101,
        name: "اسپرسو",
        price: 78,
        tag: "hot-coffee",
        description: "....",
        quantity: 0,
      },
      {
        id: 102,
        name: "لاته",
        price: 150,
        tag: "hot-coffee",
        description: "...",
        quantity: 0,
      },
    ],
  },
  {
    id: 2,
    categoryTitle: "نوشیدنی سرد",
    href: "ice-coffee",
    items: [
      {
        id: 201,
        name: "اسپرسو",
        price: 78,
        tag: "ice-coffee",
        description: "...",
        quantity: 0,
      },
      {
        id: 202,
        name: "لاته",
        price: 150,
        tag: "ice-coffee",
        description: "...",
        quantity: 0,
      },
    ],
  },
  {
    id: 3,
    categoryTitle: "دسر",
    href: "desserts",
    items: [
      {
        id: 301,
        name: "براونی",
        price: 135,
        tag: "desserts",
        description: "...",
        quantity: 0,
      },
      {
        id: 302,
        name: "چیزکیک",
        price: 140,
        tag: "desserts",
        description: "...",
        quantity: 0,
      },
    ],
  },
];

function MenuCategory() {
  return (
    <section className="flex items-start gap-2 px-2 py-2 overflow-x-auto md:flex-col md:py-2 bg-white/40 rounded-2xl">
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
