import { createClient } from "@/utils/supabase/server";
import styles from "../anidex.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const supabase = await createClient();
  const { data: anima } = await supabase
    .from("anidex")
    .select()
    .ilike("name", name)
    .single();

  if (!anima) return <h2>Hmmm, seems like there's nothing here.</h2>;
  return <p>Anima: {anima.name}</p>;
}
