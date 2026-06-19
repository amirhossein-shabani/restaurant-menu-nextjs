import {
  getSetting,
  getCategories,
  getSuggestedItems,
} from "./_lib/data-service";
import ScrollSections from "./_components/Scrollsection";
import HeroAnimation from "./_components/HeroAnimation"; // ← جدید

async function Page() {
  const { landingHyperText, openTime, closeTime } = await getSetting();
  const categories = await getCategories();
  const suggestedItems = await getSuggestedItems();

  const formattedOpenTime = openTime?.slice(0, 5);
  const fomrattedCloseTime = closeTime?.slice(0, 5);

  return (
    <main className="relative flex flex-col items-center w-screen pt-8 overflow-hidden sm:pt-32 scroll-smooth md:pt-24">
      <div className="flex justify-center w-full px-2 pt-2 mx-auto text-xl font-bold text-right text-white md:z-0 sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:pt-10 sm:text-2xl md:text-3xl lg:text-4xl lg:px-4">
        <p>{landingHyperText}</p>
      </div>
      <HeroAnimation /> {/* ← جایگزین دو div قبلی */}
      <ScrollSections categories={categories} suggestedItems={suggestedItems} />
      <div className="fixed bottom-0 flex items-center justify-center w-full pl-6 text-sm font-bold text-black/60 bg-[#AB7F52]/40">
        <p className="py-3">
          سرویس دهی {formattedOpenTime} الی {fomrattedCloseTime}
        </p>
      </div>
    </main>
  );
}

export default Page;
