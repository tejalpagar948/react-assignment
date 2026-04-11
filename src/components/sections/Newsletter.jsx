export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-16 px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Key Takeaways and Next Steps
          </h2>

          <p className="text-gray-500 mt-2">Email Address</p>

          <div className="flex mt-3">
            <input
              type="email"
              placeholder="name@example.com"
              className="flex-1 px-4 py-3 rounded-l-full border"
            />

            <button className="bg-green-600 text-white px-6 rounded-r-full">
              Send
            </button>
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          We are committed to environmental conservation and climate-resilient
          economic development.
        </div>
      </div>
    </section>
  );
}
