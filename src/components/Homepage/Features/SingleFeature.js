import { BeakerIcon } from "@heroicons/react/24/solid";

export default function SingleFeature({
  title,
  icon,
  command,
  features,
  cta,
  color,
  children,
}) {
  return (
    <div
      className={`flex flex-col justify-between p-6 shadow-lg border-t-${color} border-t-[12px] gap-y-8 rounded-xl cursor-pointer transition hover:shadow-xl`}
    >
      <div className="flex items-center justify-between header">
        <h3 className="text-3xl font-extralight">{title}</h3>
        {children}
      </div>
      <p className={`text-xl font-semibold text-${color} command`}>{command}</p>
      <ul className="pl-8 text-gray-500 list-disc features">
        {features.map((feat, index) => (
          <li key={index}>{feat}</li>
        ))}
      </ul>
      <div className="flex items-center justify-end font-semibold uppercase gap-x-2 cta">
        <p>{cta}</p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 text-${color}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}
