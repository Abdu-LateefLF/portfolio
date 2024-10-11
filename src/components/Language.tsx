interface Props {
  src: string;
}

function Language({ src }: Props) {
  return (
    <div className="flex-shrink-0 h-[90px] w-[90px] mx-4">
      <img loading="lazy" src={src} />
    </div>
  );
}

export default Language;
