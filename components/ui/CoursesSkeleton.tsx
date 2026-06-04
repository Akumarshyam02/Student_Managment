export default function CoursesSkeleton() {
  return (
    <div className="p-4 md:p-6 pb-24 md:pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">


        <div className="lg:col-span-8 rounded-2xl bg-bg-card border border-border-subtle p-6 min-h-[180px] animate-pulse">
          <div className="h-3 w-32 bg-bg-elevated rounded-full mb-3" />
          <div className="h-8 w-48 bg-bg-elevated rounded-full mb-4" />
          <div className="flex gap-3">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="w-8 h-8 bg-bg-elevated rounded-lg shimmer" />
            ))}
          </div>
        </div>


        <div className="lg:col-span-4 rounded-2xl bg-bg-card border border-border-subtle p-5 animate-pulse">
          <div className="h-3 w-20 bg-bg-elevated rounded-full mb-4" />
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-bg-elevated border border-border-subtle p-3 h-20 shimmer" />
            ))}
          </div>
        </div>

        {/* Course card skeletons */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="lg:col-span-4 rounded-2xl bg-bg-card border border-border-subtle p-5 min-h-[160px] animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 bg-bg-elevated rounded-xl flex-shrink-0 shimmer" />
              <div className="flex-1">
                <div className="h-3 bg-bg-elevated rounded-full mb-2 shimmer" />
                <div className="h-3 bg-bg-elevated rounded-full w-2/3 shimmer" />
              </div>
            </div>
            <div className="mt-auto">
              <div className="h-1.5 bg-bg-elevated rounded-full shimmer" />
            </div>
          </div>
        ))}


        <div className="lg:col-span-12 rounded-2xl bg-bg-card border border-border-subtle p-5 animate-pulse">
          <div className="h-3 w-32 bg-bg-elevated rounded-full mb-5" />
          <div className="h-20 bg-bg-elevated rounded-xl shimmer" />
        </div>
      </div>
    </div>
  );
}
