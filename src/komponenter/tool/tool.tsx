import { Children } from "react";

interface ToolTipProps {
  text: string;
  children: React.ReactNode;
}

const ToolTip: React.FC<ToolTipProps> = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </div>
    </div>
  );
};

export default ToolTip;
