export function SectionHeader({
  eyebrow,
  title,
  watermark,
}: {
  eyebrow: string;
  title: string;
  watermark?: string;
}) {
  return (
    <div className="relative mb-16 reveal">
      {watermark && <div className="watermark">{watermark}</div>}
      <div className="relative z-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-green mb-4 font-medium">
          <span className="w-10 h-px bg-gradient-brand" />
          {eyebrow}
        </div>
        <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl leading-[1.1]">
          {title}
        </h2>
      </div>
    </div>
  );
}
