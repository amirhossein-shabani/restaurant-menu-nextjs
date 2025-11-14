import MenuCategory from "../components/MenuCategory";
import MenuItemsContainer from "../components/MenuItemsContainer";

function Page() {
  return (
    <main className="grid w-full max-w-6xl gap-2 px-3 py-4 mx-3 mt-10 border-t-2 border-black/20 md:grid-cols-3 md:mt-44 ">
      <MenuCategory />
      <MenuItemsContainer />
    </main>
  );
}

export default Page;
