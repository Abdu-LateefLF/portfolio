interface Props {
  index: string;
  title: string;
}

export default function SectionHeader({ index, title }: Props) {
  return (
    <div className="mb-10">
      <p className="text-accent font-mono text-sm font-medium mb-2 tracking-wide">
        {index}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">{title}</h2>
    </div>
  );
}
