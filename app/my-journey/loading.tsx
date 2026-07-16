import { Skeleton } from "@/components/ui/skeleton";

const MyJourneyLoading = () => {
  return (
    <main className="min-lg:w-3/4">
      <section className="flex justify-between gap-4 max-sm:flex-col items-center">
        <div className="flex gap-4 items-center">
          <Skeleton className="size-[110px] rounded-lg" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-7 w-48" />
            <Skeleton className="h-4 w-56" />
          </div>
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-24 w-40 rounded-lg" />
          <Skeleton className="h-24 w-40 rounded-lg" />
        </div>
      </section>
      <div className="flex flex-col gap-4 mt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-14 w-full rounded-lg" />
        ))}
      </div>
    </main>
  );
};

export default MyJourneyLoading;
