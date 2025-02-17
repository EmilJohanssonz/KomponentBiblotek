import React from "react";

interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  onClick,
  children,
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition duration-300";
  const colors = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
  };
  const outlined = "border-2 border-current text-black hover:bg-gray-100";
  const text = "bg-transparent text-blue-500 hover:underline";

  const classes =
    variant === "outlined"
      ? `${baseStyles} ${outlined}`
      : variant === "text"
        ? `${baseStyles} ${text}`
        : `${baseStyles} ${colors[color]}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
