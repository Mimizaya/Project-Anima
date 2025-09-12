"use server";
import { revalidateTag } from "next/cache";

export async function revalidataAnimaData() {
  revalidateTag("anidex");
}
