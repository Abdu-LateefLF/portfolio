import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

function ToolBadge({ children }: Props) {
  return (
    <span className="bg-green-500 rounded-md drop-shadow-md p-1 mx-1 text-white">
      {children}
    </span>
  )
}

export default ToolBadge;
