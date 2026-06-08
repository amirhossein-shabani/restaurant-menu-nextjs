import { Suspense } from "react";
import MenuCategory from "../_components/MenuCategory";
import MenuItemsContainer from "../_components/MenuItemsContainer";
import Spinner from "../_components/Spinner";
import ScrollToHash from "../_components/ScrollToHash";
import { ModalProvider } from "../_components/ModalContext";

function Page() {
  return (
    <ModalProvider>
      <ScrollToHash /> {/* client  */}
      <Suspense fallback={<Spinner />}>
        <main className="grid w-full max-w-6xl px-3 pt-4 pb-1 mt-8 border-t-2 md:pb-4 gap-y-4 md:gap-2 border-black/10 md:grid-cols-3 sm:mt-44 scroll-smooth ">
          <MenuCategory />
          <MenuItemsContainer />
          {/* these two component are server  */}
        </main>
      </Suspense>
    </ModalProvider>
  );
}

export default Page;
