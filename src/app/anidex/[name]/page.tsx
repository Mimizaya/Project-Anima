import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCachedAnimaData } from "@/_utils/supabase/getAnimaData";
import { createClient } from "@/_utils/supabase/server";
import AnimaPage from "@/anidex/[name]/_components/AnimaPage";

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
  const anima = await getCachedAnimaData(supabase, name);

  if (!anima) notFound();
  return <AnimaPage anima={anima} />;
}
