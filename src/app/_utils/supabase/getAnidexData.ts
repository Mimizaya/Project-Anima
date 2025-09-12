import type { SupabaseClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";
import type { Anima } from "@/_types/types";
import type { Database } from "@/_utils/supabase/database.types";

const CACHE_DURATION = 3600; // 1 hour

async function getAnidexData(supabase: SupabaseClient<Database>) {
  const { data: anima, error } = await supabase
    .from("anidex")
    .select()
    .order("id", { ascending: true });

  if (error) throw error;
  return anima as Anima[];
}

export function getCachedAnidexData(supabase: SupabaseClient<Database>) {
  return unstable_cache(() => getAnidexData(supabase), ["anidex-data"], {
    tags: ["anidex"],
    revalidate: CACHE_DURATION,
  })();
}
