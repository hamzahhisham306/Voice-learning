import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="flex flex-col gap-6">
      <Skeleton className="h-10 w-64" />
      <div className="flex flex-wrap gap-4 w-full">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton
            key={i}
            className="h-64 flex-1 min-w-[280px] rounded-4xl"
          />
        ))}
      </div>
    </main>
  );
};

export default Loading;
