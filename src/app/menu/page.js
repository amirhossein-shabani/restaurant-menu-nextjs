import { Suspense } from "react";
import MenuCategory from "../_components/MenuCategory";
import MenuItemsContainer from "../_components/MenuItemsContainer";
import Spinner from "../_components/Spinner";

function Page() {
  return (
    <>
      <main className="grid w-full max-w-6xl px-3 pt-4 mt-8 border-t-2 gap-y-4 md:gap-2 border-black/10 md:grid-cols-3 sm:mt-44 scroll-smooth ">
        <Suspense fallback={<Spinner />}>
          <MenuCategory />
          <MenuItemsContainer />
        </Suspense>
      </main>
    </>
  );
}

export default Page;
