import { createClient } from "@/utils/supabase/server";
import styles from "../animaPage.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const supabase = await createClient();
  const { data: anima } = await supabase
    .from("anima")
    .select()
    .ilike("name", name)
    .single();

  if (!anima)
    return (
      <main className={styles.noResults}>
        <h2>Hmmm, seems like there's nothing here.</h2>
      </main>
    );
  return <main>Anima: {anima.name}</main>;
}
