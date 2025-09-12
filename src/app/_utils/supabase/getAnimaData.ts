import type { SupabaseClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";
import type { Anima } from "@/_types/types";
import type { Database } from "@/_utils/supabase/database.types";

const CACHE_DURATION = 3600; // 1 hour

async function getAnimaData(supabase: SupabaseClient<Database>, anima: string) {
  const { data, error } = await supabase
    .from("anidex")
    .select()
    .ilike("name", anima)
    .single();

  if (error) return null;

  return data as Anima;
}

export function getCachedAnimaData(
  supabase: SupabaseClient<Database>,
  anima: string,
) {
  return unstable_cache(() => getAnimaData(supabase, anima), [anima], {
    tags: [anima],
    revalidate: CACHE_DURATION,
  })();
}
