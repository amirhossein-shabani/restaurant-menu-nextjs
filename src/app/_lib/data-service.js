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

  return data;
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
