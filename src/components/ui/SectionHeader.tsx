interface Props {
  index: string;
  title: string;
}

export default function SectionHeader({ index, title }: Props) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-accent font-mono text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 tracking-wide">
        {index}
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
        {title}
      </h2>
    </div>
  );
}
