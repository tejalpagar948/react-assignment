import Button from '../elements/Button';

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
      {/* White Floating Container */}
      <div className="bg-white rounded-t-3xl w-full">
        <div className="wrapper pt-16 md:pt-36 pb-24 grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-10 -mt-16 md:-mt-24 relative z-10">
          {/* Left Side */}
          <div className="md:col-span-3 grid text-center md:text-left items-center md:items-start">
            <h3>Proven Expertise</h3>

            <p className="text-gray-600 text-lg md:text-2xl font-light mt-2 md:mt-0">
              A Legacy of Success
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <Button>Contact Us</Button>
            </div>
          </div>

          {/* Stats */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5 md:col-span-4">
            {stats.map(({ value, title, description }) => (
              <li
                key={value}
                className="border-b md:border-b-0 md:border-r border-gray-300 pb-5 md:pb-0 md:pr-5 last:border-0 last:pr-0 last:pb-0 text-center md:text-left">
                <span className="text-4xl md:text-5xl font-semibold">
                  {value}
                </span>

                <p className="font-medium text-lg md:text-xl mt-2">{title}</p>

                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
