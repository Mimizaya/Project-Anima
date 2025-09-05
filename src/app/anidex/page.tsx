import { createClient } from "@/utils/supabase/server";
import Anidex from "@/anidex/anidex";

export default async function Page() {
  const supabase = await createClient();

  const { data: anima } = await supabase.from("anima").select();

  if (!anima) return null;
  return <Anidex anima={anima} />;
}
