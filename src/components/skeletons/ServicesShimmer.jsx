export function ServicesShimmer() {
  return (
    <section className="px-6 md:px-16 py-20">
      <div className="space-y-10 mt-16">
        {[1, 2, 3].map((_, index) => (
          <div key={index}>
            {/* ROW */}
            <div className="flex justify-between">
              <div className="flex gap-6 w-[65%]">
                <div className="h-8 w-10 bg-gray-300 rounded animate-pulse" />
                <div className="h-8 w-1/2 bg-gray-300 rounded animate-pulse" />
              </div>

              <div className="flex gap-6 w-[45%] justify-between">
                <div className="w-[75%] space-y-2">
                  <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse" />
                </div>

                <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse" />
              </div>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="mt-10 h-[300px] w-11/12 ml-auto bg-gray-300 rounded-3xl animate-pulse" />

            {/* Divider */}
            {index !== 2 && <div className="border-b mt-16 border-gray-200" />}
          </div>
        ))}
      </div>
    </section>
  );
}
