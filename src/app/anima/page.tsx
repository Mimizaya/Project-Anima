import { Suspense } from "react";
import AnimaFilters from "@/anima/animaFilters";
import AnimaListWrapper from "@/anima/AnimaListWrapper";
import AnimaListSkeleton from "@/anima/animaListSkeleton";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  return (
    <main>
      <Suspense>
        <AnimaFilters />
      </Suspense>
      <Suspense fallback={<AnimaListSkeleton />}>
        <AnimaListWrapper searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
