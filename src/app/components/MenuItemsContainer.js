import MenuItem from "./MenuItem";

function MenuItemsContainer() {
  return (
    <section className="grid gap-2 p-2 bg-white/40 rounded-2xl md:col-span-2 md:grid-cols-2 ">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </section>
  );
}

export default MenuItemsContainer;
