type WaveVariant = "gentle" | "organic" | "slope";

const paths: Record<WaveVariant, string> = {
  gentle:
    "M0,40 C160,80 320,0 480,40 C640,80 800,0 960,40 L960,100 L0,100 Z",
  organic:
    "M0,60 C120,20 240,80 400,50 C560,20 720,70 960,30 L960,100 L0,100 Z",
  slope:
    "M0,80 C240,40 480,60 720,20 C840,5 920,10 960,15 L960,100 L0,100 Z",
};

export function WaveDivider({
  topColor,
  bottomColor,
  variant = "gentle",
  flip = false,
}: {
  topColor: string;
  bottomColor: string;
  variant?: WaveVariant;
  flip?: boolean;
}) {
  return (
    <div
      className="relative -mb-px -mt-px overflow-hidden"
      style={{ background: topColor }}
    >
      <svg
        viewBox="0 0 960 100"
        preserveAspectRatio="none"
        className={`block w-full ${flip ? "scale-x-[-1]" : ""}`}
        style={{ height: "clamp(32px, 6vw, 80px)" }}
        aria-hidden="true"
      >
        <path d={paths[variant]} fill={bottomColor} />
      </svg>
    </div>
  );
}
