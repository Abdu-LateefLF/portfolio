interface Props {
  section: string;
}

function NavButton({ section }: Props) {
  return (
    <div className="inline-block relative mx-1">
      <div className="cursor-pointer pb-1 px-2">{section}</div>
      <div className="relative">
        <div className="absolute bottom-full left-0 w-full h-10 bg-gradient-to-t from-cyan-300/50 to-transparent"></div>
        <div className="h-1 w-full rounded-lg bg-cyan-500"></div>
      </div>
    </div>
  )
}

export default NavButton
