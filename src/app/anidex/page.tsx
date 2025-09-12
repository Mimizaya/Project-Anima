import type { Metadata } from "next";
import { getCachedAnidexData } from "@/_utils/supabase/getAnidexData";
import { createClient } from "@/_utils/supabase/server";
import Anidex from "@/anidex/_components/Anidex";

export const metadata: Metadata = {
  title: "Anidex",
  description: "All available anima, easily filterable!",
};

export default async function Page() {
  const supabase = await createClient();
  const animaData = await getCachedAnidexData(supabase);

  return <Anidex data={animaData} />;
}
