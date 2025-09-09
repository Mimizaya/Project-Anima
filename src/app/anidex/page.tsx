import type { Metadata } from "next";
import { createClient } from "@/_utils/supabase/server";
import Anidex from "@/anidex/_components/Anidex";

export const metadata: Metadata = {
  title: "Anidex",
  description: "All available anima, easily filterable!",
};

export default async function Page() {
  const supabase = await createClient();

  const { data: anima } = await supabase
    .from("anidex")
    .select()
    .order("id", { ascending: true });

  if (!anima) return null;
  return <Anidex anima={anima} />;
}
