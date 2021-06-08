import Image from "next/image";

export const Icon = ({ text, iconUrl, width, height }) => {
  const w = width ? width : "36";
  const h = height ? height : "36";

  return (
    <div>
      <Image src={iconUrl} width={w} height={h} alt={text} />
      <span className="absolute invisible">{text}</span>
    </div>
  );
};

export const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="animate-bounce h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
    />
  </svg>
);

export const ArrowNarrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export const ExternalLinkSolid = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 inline mb-0.5 text-gray-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);
