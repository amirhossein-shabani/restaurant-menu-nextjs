import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  if (body.secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  revalidatePath("/");
  revalidatePath("/menu");

  return NextResponse.json({
    success: true,
    message: "Cache revalidated",
  });
}
