export function HeroShimmer() {
  return (
    <section className="relative h-screen md:h-[850px] overflow-hidden bg-white">
      {/* NAVBAR SKELETON */}
      <div className="flex justify-between items-center px-10 py-6">
        <div className="h-6 w-40 bg-gray-300 rounded animate-pulse" />

        <div className="hidden md:flex gap-10">
          <div className="h-4 w-16 bg-gray-300 rounded animate-pulse" />
          <div className="h-4 w-16 bg-gray-300 rounded animate-pulse" />
          <div className="h-4 w-16 bg-gray-300 rounded animate-pulse" />
          <div className="h-4 w-16 bg-gray-300 rounded animate-pulse" />
        </div>

        <div className="h-10 w-36 bg-gray-300 rounded-full animate-pulse" />
      </div>

      {/* HERO TEXT SKELETON */}
      <div className="px-10 md:px-20 mt-20 space-y-6">
        <div className="h-20 w-3/4 bg-gray-300 rounded animate-pulse" />

        <div className="h-24 w-2/3 bg-gray-300 rounded animate-pulse ml-auto" />

        <div className="space-y-3 mt-6">
          <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse" />
          <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse" />
        </div>

        {/* BUTTON */}
        <div className="h-12 w-40 bg-gray-400 rounded-full animate-pulse mt-6" />
      </div>

      {/* BOTTOM SECTION SKELETON */}
      <div className="absolute bottom-10 w-full px-10 flex justify-between items-end">
        {/* LEFT CARD */}
        <div className="flex gap-4 w-7/12">
          <div className="h-28 w-full bg-gray-300 rounded-2xl animate-pulse" />
        </div>

        {/* STATS CARD */}
        <div className="h-28 w-40 bg-gray-300 rounded-2xl animate-pulse" />

        {/* ARROWS */}
        <div className="flex gap-3 ml-6">
          <div className="h-12 w-12 bg-gray-300 rounded-full animate-pulse" />
          <div className="h-12 w-12 bg-gray-300 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
