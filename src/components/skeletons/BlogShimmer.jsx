export function BlogShimmer() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="space-y-4">
            {/* IMAGE */}
            <div className="h-[260px] w-full bg-gray-300 rounded-2xl animate-pulse" />

            {/* TITLE */}
            <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse" />

            {/* DESC */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
