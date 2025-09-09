import type { Metadata } from "next";
import { createClient } from "@/_utils/supabase/server";

//import styles from "../anidex.module.css";

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const nameCapitalized = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return {
    title: nameCapitalized,
  };
}

export default async function Page({ params }: Props) {
  const { name } = await params;

  const supabase = await createClient();
  const { data: anima } = await supabase
    .from("anidex")
    .select()
    .ilike("name", name)
    .single();

  if (!anima) return <h2>Hmmm, seems like there's nothing here.</h2>;
  return (
    <section>
      <h2>{anima.name}</h2>
    </section>
  );
}
