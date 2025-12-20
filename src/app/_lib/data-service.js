import { supabase } from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("id");

  if (error) {
    console.log("getCategories error :", error);
    throw new Error("Failed to load categories");
  }

  const categories = await Promise.all(
    data.map(async (category) => {
      const imgPath = category.imgUrl;
      if (!imgPath) return category;

      if (typeof imgPath === "string" && imgPath.startsWith("http")) {
        return { ...category, imgUrl: imgPath };
      }
      return category;
    })
  );

  return categories;
}

export async function getMenuItems() {
  const { data, error } = await supabase
    .from("menuItems")
    .select("*")
    .order("id");

  if (error) {
    console.log("getMenuItems error : ", error);
    throw new Error("Failed to load menu itmes");
  }

  return data;
}

export async function getSetting() {
  const { data, error } = await supabase
    .from("setting")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.log("getSetting error:", error);
    throw new Error("Failed to load setting");
  }

  return data;
}
