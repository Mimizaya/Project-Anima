import { createClient } from "@/utils/supabase/server";
import { filterAndSortAnima } from "@/utils/searchAnima";
import AnimaPage from "./animaPage";

export default async function AnimaListWrapper({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const supabase = await createClient();
  const { data: anima } = await supabase.from("anima").select("*");

  const query = Array.isArray(searchParams.query)
    ? searchParams.query[0] ?? ""
    : searchParams.query ?? "";

  const filtered = filterAndSortAnima(
    anima ?? [],
    query,
    toArray(searchParams.aspects),
    toArray(searchParams.traits)
  );

  return <AnimaPage anima={filtered} />;
}

// helper to normalize single or multiple query params
function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [...value.split("&")];
}
