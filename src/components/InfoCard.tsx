interface Props {
  title: string;
  content: string;
  href: string;
}

function InfoCard({ title, content, href }: Props) {
  return (
    <div className="flex justify-between">
      <span className="font-bold">{title}:</span>
      <a className="text-indigo-400 font-semibold" href={href}>{content}</a>
    </div>
  )
}

export default InfoCard
