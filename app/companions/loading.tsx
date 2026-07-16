import { Skeleton } from "@/components/ui/skeleton";

const CompanionsLibraryLoading = () => {
  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <Skeleton className="h-10 w-64" />
        <div className="flex gap-4">
          <Skeleton className="h-11 w-56 rounded-lg" />
          <Skeleton className="h-11 w-40 rounded-lg" />
        </div>
      </section>
      <section className="companions-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <article
            key={i}
            className="companion-card !border-black/10"
          >
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-20 rounded-4xl" />
              <Skeleton className="size-8 rounded-4xl" />
            </div>
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-11 w-full rounded-xl" />
          </article>
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibraryLoading;
