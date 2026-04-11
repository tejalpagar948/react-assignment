import Button from '../Button';

const stats = [
  {
    value: '25+',
    title: 'A Legacy of Success',
    description: 'Delivering sustainable waste solutions and long-term impact.',
  },
  {
    value: '2+',
    title: 'Biogas Fuel Plants',
    description: 'Advanced biogas systems generating renewable energy.',
  },
  {
    value: '3+',
    title: 'Bio Mass Fuel Plants',
    description: 'Efficient biomass fuel production facilities.',
  },
];

export default function ProvenExpertise() {
  return (
    <section className="bg-brandGreen relative">
      {/* Floating Card */}
      <div className="bg-white rounded-t-3xl w-full">
        <div className="wrapper py-36 grid md:grid-cols-7 gap-10 -mt-24 relative z-10">
          {/* Left Section */}
          <div className="md:col-span-3 grid">
            <h3 className="">Proven Expertise</h3>

            <p className="text-gray-600 text-2xl font-light">
              A Legacy of Success
            </p>

            <div className="mt-6">
              <Button>Contact Us</Button>
            </div>
          </div>

          {/* Stats Section */}
          <ul className="grid md:col-span-4 md:grid-cols-3 gap-5">
            {stats.map((item, index) => (
              <li
                key={index}
                className="border-r border-gray-300 pr-5 last:border-r-0 last:pr-0">
                <span className="text-5xl font-semibold">{item.value}</span>
                <p className="font-medium text-xl mt-2">{item.title}</p>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
