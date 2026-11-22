interface Props {
  title: string;
}

export default function SectionHeader({ title }: Props) {
  return (
    <div className="mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 leading-tight">
        {title}
      </h2>
    </div>
  );
}
