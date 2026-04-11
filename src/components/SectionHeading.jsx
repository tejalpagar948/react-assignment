import LineSvg from '../assets/icons/Line.svg';

const SectionHeading = ({
  label,
  title,
  align = 'center',
  underline = false,
  underlineClassName = '', // 🔥 custom control from parent
}) => {
  const alignmentClasses =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignmentClasses}`}>
      {label && <h2>{label}</h2>}

      {/* 👇 IMPORTANT: inline-block for correct width */}
      <div className="relative inline-block">
        <h3 className="leading-1 mt-1">{title}</h3>

        {underline && (
          <img
            src={LineSvg}
            alt="underline"
            className={`absolute -bottom-3 ${underlineClassName} h-auto block`}
          />
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
