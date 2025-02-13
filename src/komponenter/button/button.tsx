type ButtonProps = {
  label: string;
};

const Button = ({ label }: ButtonProps) => {
  return (
    <section className="flex justify-center items-center">
      <button className="btn bg-red-400 border-b-white rounded-sm p-1.5">
        {label}
      </button>
    </section>
  );
};

export default Button;
