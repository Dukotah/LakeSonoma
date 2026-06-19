/**
 * Decorative wave divider echoing the logo's water line. Sits between sections
 * to add a signature brand touch. Purely decorative (aria-hidden); `fill` should
 * match the background color of the section it transitions INTO.
 */
export function WaveDivider({
  fill = "#ffffff",
  className = "",
  flip = false,
}: {
  /** Color to render the wave in — usually the next section's bg. */
  fill?: string;
  className?: string;
  flip?: boolean;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none -mb-px w-full leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block h-[40px] w-full sm:h-[64px] ${flip ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,90 480,0 720,32 C960,64 1200,96 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
