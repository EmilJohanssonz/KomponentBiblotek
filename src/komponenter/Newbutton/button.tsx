type ButtonProps = {
  text: string;
  color: string;
};

const ButtonNew = ({ text, color }: ButtonProps) => {
  return <button style={{backgroundColor:color}}>{text}</button>;
};

export default ButtonNew;
