type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const renderBlock = () =>
    items.map((item, i) => (
      <span key={i} className="flex items-center gap-10">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-verde-claro" />
        <span className="font-[family-name:var(--font-heading)] text-[15px] tracking-wide">
          {item}
        </span>
      </span>
    ));

  return (
    <div className="overflow-hidden whitespace-nowrap" aria-hidden="true">
      <div className="marquee-track flex items-center gap-10 w-max px-4">
        {renderBlock()}
        {renderBlock()}
        {renderBlock()}
        {renderBlock()}
        {renderBlock()}
        {renderBlock()}
      </div>
    </div>
  );
}
