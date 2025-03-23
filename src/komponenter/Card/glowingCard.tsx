import React from "react";

interface GlowingCardProps {
  title: string;
  description: string;
  date: string;
  variant: "red" | "green";
}

const GlowingCard: React.FC<GlowingCardProps> = ({
  title,
  description,
  date,
  variant,
}) => {
  return (
    <div
      className={`relative w-80 h-96 rounded-xl p-6 text-white overflow-hidden 
      transition-transform transform hover:scale-105 hover:rotate-30
      shadow-[0_0_25px_#ff0000]
      ${variant === "red" ? "bg-red-900" : "bg-green-900"}
      `}
    >
      {/* Glow-effekt */}
      <div
        className={`absolute inset-0 blur-2xl opacity-50 
        ${variant === "red" ? "bg-red-500" : "bg-green-500"}
        `}
      ></div>

      {/* Extra ljus runt kortet */}
      {/* Extra ljus runt kortet */}
      <div
        className={`absolute -inset-10 blur-2xl 
  ${variant === "red" ? "bg-red-400 bg-opacity-50" : "bg-green-400 bg-opacity-50"}
  `}
      ></div>

      {/* Datumruta */}
      <div
        className="absolute top-4 left-4 bg-black text-white text-center px-4 py-2 
        rounded-md font-bold shadow-md"
      >
        <span className="block text-xs">JUNE</span>
        <span className="text-lg text-red-500">{date}</span>
      </div>

      {/* Kortinnehåll */}
      <div className="relative z-10 mt-20">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>

      {/* Knapp */}
      <div className="relative z-10 mt-6">
        <button
          className={`text-sm font-bold uppercase tracking-wide underline transition-colors 
          ${variant === "red" ? "text-red-500 hover:text-red-400" : "text-green-500 hover:text-green-400"}
          `}
        >
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default GlowingCard;
