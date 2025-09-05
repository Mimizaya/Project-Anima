import { createClient } from "@/utils/supabase/server";
import AnimaPage from "@/anima/animaPage";

export default async function Page() {
  const supabase = await createClient();

  const { data: anima } = await supabase.from("anima").select();

  if (!anima) return;
  return (
    <main>
      <AnimaPage anima={anima} />
    </main>
  );
}
