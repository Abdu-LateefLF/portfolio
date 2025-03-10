import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ToolBadge({ children }: Props) {
  return (
    <span className="bg-gray-800 text-gray-200 rounded-full py-1 px-3 text-sm font-medium transition-all duration-300 ease-in-out transform hover:bg-indigo-500 hover:text-white hover:scale-105 shadow-md">
      {children}
    </span>
  );
}

export default ToolBadge;
